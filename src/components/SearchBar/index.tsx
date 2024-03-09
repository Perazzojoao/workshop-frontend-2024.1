import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-semibold">
        <img
          src="/icons/Search.png"
          alt="Ícone de lupa"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-900 border-none opacity-80 text-gray-100">
        <DropdownMenuItem>
          <Input placeholder="Buscar" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SearchBar;