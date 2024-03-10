'use client'

import { useContext, useEffect } from 'react'
import Card from './Card'
import { ApiContext } from '@/context/ApiContext'

const CardList = () => {
	const { showList, search, setSearch } = useContext(ApiContext)

	useEffect(() => {
		setSearch('')
	}, [])

	return (
		<div className='mt-16'>
			<h2 className='text-3xl font-semibold mb-5 text-center'>Séries</h2>
			<section className='flex flex-wrap gap-3 sm:gap-5 justify-center'>
				{showList
					.filter(show => {
						return show.name.toLowerCase().includes(search.toLowerCase())
					})
					.map(show => (
						<Card key={show.id} show={show} />
					))}
			</section>
		</div>
	)
}

export default CardList
