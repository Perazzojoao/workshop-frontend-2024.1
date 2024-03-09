import Banner from "./Banner";

type ShowPageProps = {
  params: {
    id: string;
  }
}

const ShowPage = ({ params }: ShowPageProps) => {
  return (
    <div className='bg-zinc-950 text-gray-200 object-fill'>
      <main className='flex min-h-screen flex-col items-center justify-start p-16 sm:p-22'>
        <h1>Hello</h1>
        <Banner id={params.id} />
      </main>

    </div>
  );
}

export default ShowPage;