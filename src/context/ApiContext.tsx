'use client'

import { EpisodeType } from '@/types/episodeType'
import { Show, ShowList } from '@/types/showList'
import React, { useState } from 'react'

type ApiProps = {
	children: React.ReactNode
}

type ApiContextType = {
	showList: ShowList
	setShowList: React.Dispatch<React.SetStateAction<ShowList>>
	show: Show
	setShow: React.Dispatch<React.SetStateAction<Show>>
	topShows: ShowList
	setTopShows: React.Dispatch<React.SetStateAction<ShowList>>
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	episodeList: EpisodeType[]
	setEpisodeList: React.Dispatch<React.SetStateAction<EpisodeType[]>>
}

export const ApiContext = React.createContext({} as ApiContextType)
ApiContext.displayName = 'ApiContext'

const ApiProvider = ({ children }: ApiProps) => {
	const [showList, setShowList] = useState([] as ShowList)
	const [show, setShow] = useState({} as Show)
	const [topShows, setTopShows] = useState([] as ShowList)
	const [search, setSearch] = useState('')
	const [episodeList, setEpisodeList] = useState([] as EpisodeType[])

	return (
		<ApiContext.Provider
			value={{
				showList,
				setShowList,
				show,
				setShow,
				topShows,
				setTopShows,
				search,
				setSearch,
				episodeList,
				setEpisodeList,
			}}
		>
			{children}
		</ApiContext.Provider>
	)
}

export default ApiProvider
