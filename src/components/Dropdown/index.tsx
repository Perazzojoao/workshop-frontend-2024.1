import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-semibold">Navegar</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-900 border-none opacity-80 text-gray-100">
        <DropdownMenuItem>Início</DropdownMenuItem>
        <DropdownMenuItem>Séries</DropdownMenuItem>
        <DropdownMenuItem>Filmes</DropdownMenuItem>
        <DropdownMenuItem>Bombando</DropdownMenuItem>
        <DropdownMenuItem>Minha lista</DropdownMenuItem>
        <DropdownMenuItem>Navegar por idiomas</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}

export default Dropdown;