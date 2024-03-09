'use client';

import { useEffect, useState } from "react";
import { ShowList } from '../../types/showList';
import axios from "axios";
import Card from "./Card";

const CardList = () => {
  const [showList, setShowList] = useState([] as ShowList);

  useEffect(() => {
    axios.get<ShowList>('http://api.tvmaze.com/shows')
      .then(response => {
        setShowList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return ( 
    <section className="flex flex-wrap gap-3 sm:gap-5 justify-center mt-16">
      {showList.map(show => <Card key={show.id} show={show} />)}
    </section>
  );
}
 
export default CardList;