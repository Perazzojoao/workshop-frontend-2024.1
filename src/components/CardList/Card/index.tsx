import { ApiContext } from '@/context/ApiContext'
import { Show } from '@/types/showList'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

type CardProps = {
	show: Show
}

const Card = ({ show }: CardProps) => {

	const { setSearch } = useContext(ApiContext)

	const router = useRouter()
	const onClick = () => {
		setSearch('')
		router.push(`/${show.id}`)
	}

	return (
		<div onClick={onClick} className='flex flex-col gap-3 p-3 rounded-lg bg-netflixBg hover:bg-zinc-300 hover:text-netflixBg transition-all ease-in-out shadow-md shadow-black cursor-pointer w-[192px]'>
      <img src={show.image.medium} alt={show.name} width={168} height={236} className='rounded-md' />
			<h3 className='text-wrap font-semibold text-lg'>{show.name}</h3>
		</div>
	)
}

export default Card
