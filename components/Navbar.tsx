import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white tracking-tight">
          MyApp
        </span>
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
          >
            Acerca
          </Link>
          <Link
            href="/products"
            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
          >
            Productos
          </Link>
        </div>
      </div>
    </nav>
  );
}
