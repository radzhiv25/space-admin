import Link from 'next/link'
import Hero from './components/hero';

export default function Home() {
  return (
    <div className="w-screen">
      {/* <h1>hey 👋🏻</h1> */}
      <div className="m-5 p-3 flex justify-between items-center border-b">
        <div className="leading-tight">
          <h1 className="text-md font-semibold">Space admin</h1>
          <p className="text-xs text-gray-400">A place to see space happenings</p>
        </div>
        <div className="text-gray-500 font-sans space-x-5">
          <Link href='/signup' className='hover:text-black'>Sign Up</Link>
          <Link href='/login' className='hover:text-gray-700'>Login</Link>
        </div>
      </div>
      <Hero />
    </div>
  );
}
