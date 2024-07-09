export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='bg-white w-full h-1/2 place-items-center justify-center flex font-bold text-8xl text-blue-400'>
        <h1>Quizard</h1>
      </div>
      <div className='bg-white text-black flex gap-1'>
        <span className='flex flex-col border border-1 border-black rounded place-items-center p-2 w-fit'>
          <p>1.</p>
          <span className='rounded-full outline-1 outline-black outline w-4 h-4'></span>
        </span>
        <span className='flex flex-col border border-1 border-black rounded place-items-center p-2 w-fit'>
          <p>2.</p>
          <span className='rounded-full outline-1 outline-black outline w-4 h-4'></span>
        </span>
      </div>
    </main>
  );
}
