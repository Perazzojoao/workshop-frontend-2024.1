import Link from "next/link";

const NavBar = () => {
  return (
    <nav className='flex gap-x-3 xl:gap-x-5 items-center text-sm lg:text-base'>
      <Link href='/' className="hover:text-gray-400">Início</Link>
      <Link href='/' className="hover:text-gray-400">Séries</Link>
      <Link href='/' className="hover:text-gray-400">Filmes</Link>
      <Link href='/' className="hover:text-gray-400">Bombando</Link>
      <Link href='/' className="hover:text-gray-400">Minha lista</Link>
      <Link href='/' className="hover:text-gray-400">Navegar por idiomas</Link>
    </nav>
  );
}

export default NavBar;