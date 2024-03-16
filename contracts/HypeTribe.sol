//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


/**
 * @notice This contract is intended to create & claim SBT collections.
 */
contract HypeTribe is ERC721URIStorage {
    uint256 private _tokenIds;

    event StartEvent(address userAddress, uint256 eventId);
    event StopEvent(address userAddress, uint256 eventId);
    event Checkin(address userAddress, uint256 eventId);

    /**
     * @notice Struct for NFT reward
     */
    struct Quest {
        string rewardTitle;
        string rewardDescription;
        string rewardUri;
    }

    /**
     * @notice Struct for an action
     */
    struct EventAction {
        uint256 timestamp;
        address userAddress;
        bool actionStatus;
    }

    /**
     * @notice Struct for main event data
     */
    struct EventData {
        uint256 eventId;
        uint256 startTime;
        uint256 finishTime;
        uint256 totalUsers;
        address eventOwner;
        string eventName;
        string eventDescription;
        bool isAvailable;
    }

    /**
     * @notice Struct for an event stats
     */
    struct EventStats {
        uint256 totalActions;
        uint256 totalRewards;
        uint256 totalUsers;
        uint256 createdAt;
        uint256 stoppedAt;
        address[] participants;
    }

    /**
     * @notice Struct for a full event data
     */
    struct Event {
        EventData eventData;
        EventStats eventStats;
        Quest quest;
    }

    uint256 public eventCount;
    string public collectionName = "vSelf Events SBTs";
    string public collectionSymbol = "VSELF";

    mapping(uint256 => uint256) public _eventIdToEventIndex;
    mapping(uint256 => Quest) public _eventIdToQuest;
    mapping(uint256 => EventAction[]) public _eventIdToEventActions;
    mapping(uint256 => EventStats) public _eventIdToEventStats;
    mapping(uint256 => bool) public _isEventIdExist;
    mapping(uint256 => mapping(address => bool)) public _hasUserClaimedRewards;

    EventData[] public eventDatas;

    /**
     * @notice Constructor
     * @dev collectionName and collectionName must be set
     */
    constructor() ERC721("EventX", "HypeTribe") {
        _tokenIds = 0;
    }

    function _mintNFT(
        address _recipient,
        string memory _tokenURI
    ) internal returns (uint256) {
       _tokenIds += 1; // Increment the ID for each new NFT
        uint256 newItemId = _tokenIds;

        _mint(_recipient, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }

    /**
 * @dev Hook that is called before any token transfer. This includes minting and burning.
 * Overrides the standard _beforeTokenTransfer method to enforce non-transferability.
 */

    function startEvent(
        string memory _eventName,
        string memory _eventDescription,
        uint256 _startTime,
        uint256 _finishTime,
        Quest memory _quest
    ) external {
        uint256 eventIndex = eventCount++;

        eventDatas.push();
        EventData storage newEventData = eventDatas[eventIndex];

        uint256 eventId = block.timestamp + block.number;

        _isEventIdExist[eventId] = true;

        newEventData.eventId = eventId;
        newEventData.startTime = _startTime;
        newEventData.finishTime = _finishTime;
        newEventData.totalUsers = 0;
        newEventData.eventOwner = msg.sender;
        newEventData.eventName = _eventName;
        newEventData.eventDescription = _eventDescription;
        newEventData.isAvailable = true;

        address[] memory emptyArray;

        _eventIdToEventIndex[eventId] = eventIndex;
        _eventIdToQuest[eventId] = _quest;
        _eventIdToEventStats[eventId] = EventStats({
            totalActions: 0,
            totalRewards: 0,
            totalUsers: 0,
            createdAt: block.timestamp,
            stoppedAt: block.timestamp,
            participants: emptyArray
        });

        emit StartEvent(msg.sender, eventId);
    }

    function checkin(uint56 _eventId, address _recipient) external {
        require(
            !_hasUserClaimedRewards[_eventId][_recipient],
            "Already claimed"
        );

        require(_isEventIdExist[_eventId], "Not exist event id");

        uint256 eventIndex = _eventIdToEventIndex[_eventId];
        EventData storage eventData = eventDatas[eventIndex];

        require(eventData.isAvailable, "Not time to claim. Already stopped.");

        require(
            eventData.startTime <= block.timestamp,
            "Not time to claim. Not started yet."
        );

        require(
            eventData.finishTime > block.timestamp,
            "Not time to claim. Already finished."
        );

        eventData.totalUsers++;
        _hasUserClaimedRewards[_eventId][_recipient] = true;

        _eventIdToEventStats[_eventId].totalActions++;
        _eventIdToEventStats[_eventId].totalRewards++;
        _eventIdToEventStats[_eventId].totalUsers++;
        _eventIdToEventStats[_eventId].participants.push(_recipient);

        _eventIdToEventActions[_eventId].push(
            EventAction({
                timestamp: block.timestamp,
                userAddress: _recipient,
                actionStatus: true
            })
        );

        _mintNFT(_recipient, _eventIdToQuest[_eventId].rewardUri);

        emit Checkin(_recipient, _eventId);
    }


    function stopEvent(uint256 _eventId) external {
        require(_isEventIdExist[_eventId], "Not exist event id");

        uint256 eventIndex = _eventIdToEventIndex[_eventId];

        EventData storage eventData = eventDatas[eventIndex];

        require(
            msg.sender == eventData.eventOwner,
            "You are not an event owner."
        );

        eventData.isAvailable = false;
        _eventIdToEventStats[_eventId].stoppedAt = block.timestamp;

        emit StopEvent(msg.sender, _eventId);
    }


    function getOngoingEventDatas(
        uint256 _fromIndex,
        uint256 _limit
    ) external view returns (EventData[] memory) {
        uint256 count = _limit;

        if ((_fromIndex + _limit) > eventCount) {
            count = eventCount - _fromIndex;
        }

        EventData[] memory validEventDatas = new EventData[](count);

        for (uint i = 0; i < count; i++) {
            if (
                eventDatas[_fromIndex + i].isAvailable &&
                eventDatas[_fromIndex + i].finishTime > block.timestamp
            ) {
                validEventDatas[i] = eventDatas[_fromIndex + i];
            }
        }

        return validEventDatas;
    }


    function getOngoingEvents(
        uint256 _fromIndex,
        uint256 _limit
    ) external view returns (Event[] memory) {
        uint256 count = _limit;

        if ((_fromIndex + _limit) > eventCount) {
            count = eventCount - _fromIndex;
        }

        Event[] memory validEvents = new Event[](count);

        for (uint i = 0; i < count; i++) {
            if (
                eventDatas[_fromIndex + i].isAvailable &&
                eventDatas[_fromIndex + i].finishTime > block.timestamp
            ) {
                validEvents[i] = Event({
                    eventData: eventDatas[_fromIndex + i],
                    eventStats: _eventIdToEventStats[
                        eventDatas[_fromIndex + i].eventId
                    ],
                    quest: _eventIdToQuest[eventDatas[_fromIndex + i].eventId]
                });
            }
        }

        return validEvents;
    }

    /**
     * @notice Get a specific event according to an event id
     * @param _eventId: the first index of events to be retrieved
     * @dev Callable by users
     */
    function getEvent(uint256 _eventId) external view returns (Event memory) {
        uint256 eventIndex = _eventIdToEventIndex[_eventId];

        return
            Event({
                eventData: eventDatas[eventIndex],
                eventStats: _eventIdToEventStats[_eventId],
                quest: _eventIdToQuest[_eventId]
            });
    }

    /**
     * @notice Get an event data according to given event id
     * @param _eventId: nonce of the event
     * @dev Callable by users
     */
    function getEventData(
        uint256 _eventId
    ) external view returns (EventData memory) {
        uint256 eventIndex = _eventIdToEventIndex[_eventId];
        EventData memory eventData = eventDatas[eventIndex];

        return eventData;
    }


    function getEventActions(
        uint256 _eventId,
        uint256 _fromIndex,
        uint256 _limit
    ) external view returns (EventAction[] memory) {
        uint256 eventActionsLength = _eventIdToEventActions[_eventId].length;
        uint count = _limit;

        if ((_fromIndex + _limit) > eventActionsLength) {
            count = eventActionsLength - _fromIndex;
        }

        EventAction[] memory eventActions = new EventAction[](count);

        for (uint i = 0; i < count; i++) {
            eventActions[i] = _eventIdToEventActions[_eventId][_fromIndex + i];
        }

        return eventActions;
    }


    function getCurrentTimestamp() external view returns (uint256) {
        return block.timestamp;
    }
}