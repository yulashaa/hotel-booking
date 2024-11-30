import Link from 'next/link';

const HotelCard = ({ id, name, image, rating, reviews }) => {
  return (
    <Link href={`/booking/${id}`} className="block bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <div className="flex items-center mt-2">
        <span className="text-yellow-400">★</span>
        <span className="ml-2 text-white">{rating}</span>
      </div>
      <p className="mt-2 text-sm text-gray-400">{reviews} відгуків</p> {/* Кількість відгуків */}
    </Link>
  );
};

export default HotelCard;
