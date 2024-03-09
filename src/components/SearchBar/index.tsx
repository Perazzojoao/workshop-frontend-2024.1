'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "../ui/input";
import { useContext } from "react";
import { ApiContext } from "@/context/ApiContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(ApiContext);

  const setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

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
          <Input placeholder="Buscar" className="text-black" value={search} onChange={setSearchValue} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SearchBar;