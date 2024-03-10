'use client'

import { ImageType, ImageList } from '@/types/imagesType'
import axios from 'axios'
import { useEffect, useState } from 'react'

type BannerProps = {
	id: string
}

const Banner = ({ id }: BannerProps) => {
	const [bannerUrl, setBannerUrl] = useState('')

	useEffect(() => {
		axios
			.get<ImageList>(`https://api.tvmaze.com/shows/${id}/images`)
			.then(response => {
				const images = response.data
        const banner = images.find((image: ImageType) => image.type === 'banner')
        const background = images.find((image: ImageType) => image.type === 'background')
        const poster = images.find((image: ImageType) => image.type === 'poster')
				setBannerUrl(() => {
          if (banner) {
            return banner.resolutions.original.url
          } else if (background) {
            return background.resolutions.original.url
          } else if (poster){
            return poster.resolutions.original.url
          }
          return ''
        })
			})
			.catch(error => {
				console.log(error)
			})
	}, [id])

	return (
		<>
			<img src={bannerUrl} alt='Banner' className='w-screen' />
		</>
	)
}

export default Banner
