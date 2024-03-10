'use client'

import Episode from "@/components/Episode";
import { ApiContext } from "@/context/ApiContext";
import { Show } from "@/types/showList";
import axios from "axios";
import { useContext, useEffect, useMemo } from "react";

type InformationsProps = {
  id: string;
}

const Informations = ({ id }: InformationsProps) => {
  const { show, setShow, episodeList, setEpisodeList, search } = useContext(ApiContext);

  useEffect(() => {
    axios.get<Show>(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then((response) => {
        setEpisodeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const premiered = useMemo(() => {
    if (show.premiered) {
      const date = new Date(show.premiered);
      return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return '';
  }, [show.premiered]);

  return (
    <section className="mt-7 w-full xl:w-2/3 px-8 py-6 bg-[#181818] rounded-lg">
      <h1 className="font-semibold text-3xl mb-3">{show.name}</h1>
      <div className="flex gap-4">
        <p><strong>Nota:</strong> {show.rating?.average}</p>
        <p><strong>Lançamento:</strong> {premiered}</p>
        <p><strong>Episódios:</strong> {episodeList.length}</p>
      </div>
      <div className="mt-7">
        <h2 className="font-semibold text-2xl">Sinopse</h2>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} className="text-justify"/>
        <section className="mt-20 flex flex-col gap-5">
          <h2 className="font-semibold text-2xl mb-2">Episódios</h2>
          {episodeList
          .filter(episode => {
            return episode.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((episode, i) => (
            <Episode key={episode.id} episode={episode} index={i+1} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default Informations;