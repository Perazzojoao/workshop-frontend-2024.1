import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const Dropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='font-semibold'>Navegar</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-zinc-900 border-none opacity-90 text-gray-100'>
				<DropdownMenuItem className='opacity-100'>
					<Link href='/' className='hover:text-gray-400'>
						Início
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='opacity-100'>
					<Link href='/' className='hover:text-gray-400'>
						Séries
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='opacity-100'>
					<Link href='/' className='hover:text-gray-400'>
						Filmes
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='opacity-100'>
					<Link href='/' className='hover:text-gray-400'>
						Bombando
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='opacity-100'>
					<Link href='/' className='hover:text-gray-400'>
						Minha lista
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='opacity-100'>
					<Link href='/' className='hover:text-gray-400'>
						Navegar por idiomas
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default Dropdown
