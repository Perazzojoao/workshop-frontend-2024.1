import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApiProvider from '@/context/ApiContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Netflix',
	description: 'Site para assistir filmes e séries',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				<ApiProvider>
					<Header />
					{children}
					<Footer />
				</ApiProvider>
			</body>
		</html>
	)
}
