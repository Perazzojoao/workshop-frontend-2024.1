export type ShowList = Show[]

export type Show = {
	id: number
	url: string
	name: string
	type: string
	language: string
	genres: string[]
	status: string
	runtime: number
	averageRuntime: number
	premiered: string
	officialSite: string
	schedule: Schedule
	rating: Rating
	weight: number
	network: Network
  webChannel: string | null
  dvdCountry: string | null
  externals: Externals
  image: Image
  summary: string
  updated: number
  links: Links
}

type Schedule = {
	time: string
	days: string[]
}

type Rating = {
	average: number
}

type Network = {
	id: number
	name: string
	country: Country
	officialSite: string
}

type Country = {
  name: string
  code: string
  timezone: string
}

type Externals = {
  tvrage: number
  thetvdb: number
  imdb: string
}

export type Image = {
  medium: string
  original: string
}

type Links = {
  self: {
    href: string
  }
  previousepisode: {
    href: string
  }
}