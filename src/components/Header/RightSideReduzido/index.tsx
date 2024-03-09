import SearchBar from '@/components/SearchBar';
import Image from 'next/image';

const RightSideReduzido = () => {
  return ( 
    <section className='flex items-center gap-x-5'>
        <SearchBar />
        <Image
          src={'/NotificationBell.png'}
          alt="Ícone de lupa"
          width={24}
          height={24}
          className='cursor-pointer'
        />
        <div className='flex gap-x-2'>
          <Image
            src={'/ProfileIMG.png'}
            alt="Foto de perfil"
            width={32}
            height={32}
            className='cursor-pointer'
          />
          <Image
            src={'/DownArrow.png'}
            alt="Foto de perfil"
            width={16}
            height={16}
            className='cursor-pointer scale-[65%]'
          />
        </div>
      </section>
  );
}
 
export default RightSideReduzido;