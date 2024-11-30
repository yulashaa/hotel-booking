import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <nav className="container mx-auto flex items-center">
      <Link href="/" className="text-lg font-bold hover:text-gray-400 pr-6">Забронювати</Link>
      <Link href="/about-hotel" className="text-lg font-bold hover:text-gray-400">Про систему</Link>
      <div className="ml-auto">
        <Link href="/account" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Мій акаунт</Link>
      </div>
    </nav>
  </header>
);

export default Header;
