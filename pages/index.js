import { useState } from 'react';
import HotelCard from '@/components/HotelCard.js';
import hotels from '../data/hotels';
import Header from '@/components/Header';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-10">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              placeholder="Шукати готель..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 rounded bg-gray-700 text-white w-full sm:w-1/2"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="p-3 rounded bg-gray-700 text-white"
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="p-3 rounded bg-gray-700 text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;