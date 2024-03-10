import Banner from "./Banner";
import Informations from "./Informations";

type ShowPageProps = {
  params: {
    id: string;
  }
}

const ShowPage = ({ params }: ShowPageProps) => {
  return (
    <div className='bg-zinc-950 text-gray-200 object-fill'>
      <main className='flex min-h-screen flex-col items-center justify-start px-16 pb-12 pt-24 sm:p-22 '>
        <Banner id={params.id} />
        <Informations id={params.id} />
      </main>

    </div>
  );
}

export default ShowPage;