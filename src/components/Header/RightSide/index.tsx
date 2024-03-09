import SearchBar from '@/components/SearchBar';
import Image from 'next/image';

const RightSide = () => {
  return ( 
    <section className='flex items-center gap-x-5'>
        <SearchBar />
        <a className='cursor-pointer hover:text-gray-400'>Infantil</a>
        <Image
          src={'/icons/GiftBox.png'}
          alt="Ícone de lupa"
          width={24}
          height={24}
          className='cursor-pointer'
        />
        <Image
          src={'/icons/NotificationBell.png'}
          alt="Ícone de lupa"
          width={24}
          height={24}
          className='cursor-pointer'
        />
        <div className='flex gap-x-2'>
          <Image
            src={'/icons/ProfileIMG.png'}
            alt="Foto de perfil"
            width={32}
            height={32}
            className='cursor-pointer'
          />
          <Image
            src={'/icons/DownArrow.png'}
            alt="Foto de perfil"
            width={16}
            height={16}
            className='cursor-pointer scale-[65%]'
          />
        </div>
      </section>
  );
}
 
export default RightSide;