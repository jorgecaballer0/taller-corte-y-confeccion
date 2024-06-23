const Navbar = () => {
  return (
    <header className="flex justify-around">
      <div>
        <img src="#" alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-12">
          <li>Home</li>
          <li>Sobre nosotros</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
