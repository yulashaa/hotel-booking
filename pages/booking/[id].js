import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../../components/Header';
import hotels from '../../data/hotels';

const BookingPage = () => {
  const { id } = useRouter().query;
  const hotel = hotels.find((h) => h.id.toString() === id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save data, send to API, etc.)
    setIsSubmitted(true);
    console.log('Деталі бронювання:', formData);
  };

  if (!hotel) return <p className="text-white">Hotel not found.</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Бронювання - {hotel.name}</h1>

        {/* Display a form to collect user data */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Ваше ім'я</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Ваша пошта</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Дата заїзду</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Дата виїзду</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Повідомлення</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 rounded bg-gray-700 text-white"
                  placeholder="Будь-які особливі побажання?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Підтвердження бронювання
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold">Дякуємо за Ваше бронювання!</h2>
            <p className="mt-4">Деталі вашого бронювання отримано. Ми скоро зв'яжемось.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookingPage;