'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { ApiContext } from '@/context/ApiContext'
import { ShowList } from '@/types/showList'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import Card from '../CardList/Card'

const Popular = () => {
	const { topShows, setTopShows, setShowList } = useContext(ApiContext)

	useEffect(() => {
		axios
			.get<ShowList>('https://api.tvmaze.com/shows')
			.then(response => {
				const shows = response.data
				const top30Shows = shows
					.filter(show => show.rating.average > 8.5)
					.sort((a, b) => b.rating.average - a.rating.average)
					.slice(0, 20);
				setTopShows(top30Shows)
				setShowList(shows)
			})
			.catch(error => {
				console.error('Error fetching popular shows:', error)
			})
	}, [])

	return (
		<section className='mt-28 hidden sm:block'>
			<h2 className='text-3xl font-semibold mb-3'>Top séries na Netflix</h2>
			<Carousel className='w-full sm:max-w-2xl lg:max-w-4xl'>
				<CarouselContent>
					{topShows.map(show => (
						<CarouselItem key={show.id} className="basis-1/3 lg:basis-1/4">
							<Card show={show} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='text-black' />
				<CarouselNext className='text-black' />
			</Carousel>
		</section>
	)
}

export default Popular
