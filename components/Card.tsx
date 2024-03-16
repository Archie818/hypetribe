import Image from "next/image";

interface CardProps {
  username: string;
  image: string;
  likes: number;
  time: string;
}

const Card: React.FC<CardProps> = ({ username, image, likes, time }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image className="w-full" src={image} alt={`Content by ${username}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base">
          Likes: {likes} - Posted {time} ago
        </p>
      </div>
    </div>
  );
};
