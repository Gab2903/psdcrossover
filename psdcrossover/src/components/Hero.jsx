import heroImage from '../assets/hero-image.jpg';
import Navbar from './Navbar';

const Hero = () => {
  return (
<section className='flex'>
    <div className='w-full'>
        <img src={heroImage} alt="" />
    </div>
    <div className='justify-start m-auto pr-40 w-fit'>
        <h1  className="text-8xl font-bold">An Open Presentation</h1>
        <p className='text-justify py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt eos nemo debitis aspernatur praesentium possimus quibusdam laboriosam repudiandae illum itaque explicabo molestias, laudantium eaque ut quam corporis tenetur saepe? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt eos nemo debitis aspernatur praesentium possimus quibusdam</p>
        <button className="bg-base-100 text-primary font-bold py-1.5 px-10 rounded-md border-primary border-2">Learn More</button>
    </div>
</section>
  )
}
export default Hero