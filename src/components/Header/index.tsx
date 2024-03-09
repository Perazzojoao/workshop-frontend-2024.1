'use client'

import Image from 'next/image'
import NavBar from './NavBar'
import { useState } from 'react'
import Dropdown from '../Dropdown'
import LeftSide from './LeftSide'
import LeftSideReduzido from './LeftSideReduzido'
import Link from 'next/link'

const Header = () => {
	const [larguraDaJanela, setLarguraDaJanela] = useState(0)

	const handleResize = () => {
		setLarguraDaJanela(window.innerWidth)
	}

	window.addEventListener('resize', handleResize)

	return (
		<header className='bg-netflixBg text-gray-200 py-6 px-8 sm:px-16 flex flex-wrap gap-y-4 justify-center min-[449px]:justify-between fixed w-full'>
			<div className='flex gap-12'>
				<Link href='/'>
					<Image src={'/NetflixLogoSvg.png'} alt='Netflix Logo' width={111} height={30} />
				</Link>
				{larguraDaJanela > 1100 ? <NavBar /> : <Dropdown />}
			</div>
			{larguraDaJanela > 680 ? <LeftSide /> : <LeftSideReduzido />}
		</header>
	)
}

export default Header
