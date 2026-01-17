import GridComponent from '../components/GridComponent.jsx';
import green from '../assets/green.png';
import blue from '../assets/blue.png';

function HomePage() {

  return(
<>
      {/* 1. Added 'relative' so absolute children stay inside this div */}
      {/* 2. Added 'isolate' to ensure z-index only affects things inside this container */}
      <div id="home" className="relative isolate min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center text-center overflow-hidden">
        
        <GridComponent size='60px' opacity='0.2' />

        {/* TEXT LAYER: Keep this relative and give it a higher z-index */}
        <div className="relative z-10 text-left flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl my-2 italic">Frappe Developer</h1>
          <h1 className="text-4xl md:text-6xl my-2 italic">Full Stack Developer</h1>
          <h1 className="text-4xl md:text-6xl my-2 italic">Designer</h1>
        </div>

        {/* IMAGE LAYER: Positioned absolutely to sit behind the text */}
        <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
          <img src={green} className='absolute bottom-[-5%] translate-x-0 w-[40vw] h-auto object-cover mix-blend-multiply md:w-[45vw] lg:w-[25vw] ' alt="green background" />
          <img src={blue} className='absolute top-[10%] translate-x-[60vw] w-[40vw] h-auto object-contain mix-blend-multiply md:w-[45vw] lg:w-[25vw] lg:translate-x-[75vw]' alt="blue background" />
       </div>

      </div>
    </>
  )

}

export default HomePage;
