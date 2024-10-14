import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <>
    <div className="bg-base-100 h-891">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={heroImage}/>
    <div>
      <h1 className="text-5xl font-bold">An Open Presentation</h1>
      <p className="py-6">
      Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eius mod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullam colaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
      </p>
      <button className="btn btn-secondary border-4 border-primary text-pr">Learn More</button>
    </div>
  </div>
</div>
</>
  )
}
export default Hero