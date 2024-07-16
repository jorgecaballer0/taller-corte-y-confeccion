const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto py-7">
        <div className="flex items-center">
          <img src="#" alt="LOGO EMPRESA" />
        </div>
        <nav className="flex space-x-4">
          <li className="text-gray-700 cursor-pointer hover:text-red-900">
            Home
          </li>
          <li className="text-gray-700 cursor-pointer hover:text-red-900">
            Quienes somos
          </li>
          <li className="text-gray-700 cursor-pointer hover:text-red-900">
            Servicios Textiles
          </li>
          <li className="text-gray-700 cursor-pointer hover:text-red-900">
            Contacto
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
