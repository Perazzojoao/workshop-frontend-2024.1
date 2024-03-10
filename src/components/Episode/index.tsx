import { EpisodeType } from '@/types/episodeType'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

type EpisodesProps = {
  episode: EpisodeType
  index: number
}

const Episode = ({ episode, index }: EpisodesProps) => {
  return (
    <a href={episode.url} className='sm:px-10 flex flex-col gap-3'>
      <div className='hover:bg-[#333333] transition-all ease-in-out px-5 py-3 rounded-md flex flex-wrap xsm:flex-nowrap gap-4 items-center'>
        <span className='font-semibold text-xl flex items-center'>{index}</span>
        <img src={episode.image.medium} alt="Imagem do episódio" width={125} height={70} className='rounded-md max-h-[70px]' />
        <div className='flex flex-col flex-grow'>
          <div className='flex justify-between w-full'>
            <h3 className='font-semibold mb-2'>{episode.name}</h3>
            <span>{episode.runtime} min</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: episode.summary }} className="text-justify text-sm" />
        </div>
      </div>
      <DropdownMenuSeparator />
    </a>
  )
}

export default Episode
