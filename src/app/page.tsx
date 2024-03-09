import CardList from "@/components/CardList";
import Popular from "@/components/Popular";

export default function Home() {
	return (
		<div className='bg-zinc-950 text-gray-200 object-fill'>
			<main className='flex min-h-screen flex-col items-center justify-start p-16 sm:p-22'>
        <Popular />
        <CardList />
      </main>
			
		</div>
	)
}
