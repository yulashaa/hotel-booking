import Header from '@/components/Header';

const AboutAppPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-400">
          Про BookStay
        </h1>
        <img
          src="/book_hotel.jpg"
          alt="App"
          className="w-[40%] h-72 object-cover rounded-lg mx-auto mb-6 shadow-lg"
        />
        <p className="mt-4 text-lg leading-relaxed">
          Система управління онлайн-бронюваннями готелів — це сучасний інструмент, що дозволяє користувачам та адміністраторам готелів ефективно керувати процесами бронювання. Вона забезпечує швидкий і зручний доступ до актуальної інформації про номери, клієнтів та доступність послуг.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Система пропонує широкий набір функцій, які включають управління бронюваннями, автоматичне оновлення інформації про наявність номерів, облік фінансових операцій, а також підтримку комунікації з клієнтами. Користувачі можуть легко знайти доступні номери за такими критеріями, як дата, ціна, кількість місць, рейтинг та інші параметри.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Гості можуть самостійно створювати бронювання, вказуючи бажані дати та додаткові послуги, тоді як адміністрація має можливість швидко обробляти заявки, редагувати бронювання та отримувати аналітичні звіти.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Ми постійно вдосконалюємо систему, додаючи нові модулі та інтеграції, щоб зробити її ще більш ефективною для управління. Ваші відгуки та пропозиції допомагають нам створювати сучасний сервіс!
        </p>

        {/* Grey Contact Us Button */}
        <div className="mt-8 text-center">
          <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600">
            Зв'язатись з нами
          </button>
        </div>
      </main>
    </div>
  );
};

export default AboutAppPage;
