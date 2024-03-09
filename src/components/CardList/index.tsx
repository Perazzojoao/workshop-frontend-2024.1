'use client'

import { useContext, useEffect } from 'react'
import { ShowList } from '../../types/showList'
import axios from 'axios'
import Card from './Card'
import { ApiContext } from '@/context/ApiContext'

const CardList = () => {
  const { showList, setShowList, search } = useContext(ApiContext)

  useEffect(() => {
    axios
      .get<ShowList>('http://api.tvmaze.com/shows')
      .then(response => {
        setShowList(response.data)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
  }, [])

  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-semibold mb-5 text-center'>Séries</h2>
      <section className='flex flex-wrap gap-3 sm:gap-5 justify-center'>
        {showList
          .filter(show => {
            return show.name.toLowerCase().includes(search.toLowerCase());
          })
          .map(show => (
            <Card key={show.id} show={show} />
          ))}
      </section>
    </div>
  )
}

export default CardList
