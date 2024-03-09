'use client'

import { ImageType, ImageList } from '@/types/imagesType'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type BannerProps = {
	id: string
}

const Banner = ({ id }: BannerProps) => {
	const [banner, setBanner] = useState({} as ImageType)

	useEffect(() => {
		axios
			.get<ImageList>(`https://api.tvmaze.com/shows/${id}/images`)
			.then(response => {
				const images = response.data
				setBanner(images.find((image: ImageType) => image.type === 'banner') as ImageType)
				console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [id])

	return (
		<>
			{/* <Image src={banner.resolutions.medium.url} alt='Banner' /> */}
		</>
	)
}

export default Banner
