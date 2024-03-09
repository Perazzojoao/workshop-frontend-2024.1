const NavBar = () => {
  return (
    <nav className='flex gap-x-3 xl:gap-x-5 items-center text-sm lg:text-base'>
      <a href='/' className="hover:text-gray-400">Início</a>
      <a href='/' className="hover:text-gray-400">Séries</a>
      <a href='/' className="hover:text-gray-400">Filmes</a>
      <a href='/' className="hover:text-gray-400">Bombando</a>
      <a href='/' className="hover:text-gray-400">Minha lista</a>
      <a href='/' className="hover:text-gray-400">Navegar por idiomas</a>
    </nav>
  );
}

export default NavBar;