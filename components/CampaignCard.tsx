import Image from "next/image";
import Link from "next/link";

interface CampaignProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CampaignCard: React.FC<CampaignProps> = ({
  title,
  description,
  image,
  link,
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
    <Image src={image} alt={title} width={400} height={250} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Link
        href={link}
        className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        passHref
      >
        Learn More
      </Link>
    </div>
  </div>
);

export default CampaignCard;
