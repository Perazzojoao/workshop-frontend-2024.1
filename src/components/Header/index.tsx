'use client'

import Image from 'next/image'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import Dropdown from '../Dropdown'
import Link from 'next/link'
import RightSide from './RightSide'
import RightSideReduzido from './RightSideReduzido'

const Header = () => {
	const [larguraDaJanela, setLarguraDaJanela] = useState(0)

	useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

	return (
		<header className='bg-netflixBg text-gray-200 py-6 px-8 sm:px-16 flex flex-wrap gap-y-4 justify-center min-[449px]:justify-between fixed z-50 w-full shadow-lg shadow-black'>
			<div className='flex gap-12'>
				<Link href='/'>
					<Image src={'/NetflixLogoSvg.png'} alt='Netflix Logo' width={111} height={30} />
				</Link>
				{larguraDaJanela > 1100 ? <NavBar /> : <Dropdown />}
			</div>
			{larguraDaJanela > 680 ? <RightSide /> : <RightSideReduzido />}
		</header>
	)
}

export default Header
