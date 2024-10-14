import Zigzag from '../assets/Zigzag.svg';

const Purplebox = () => {
  return (
    <section>
        <div className="bg-primary mx-24 my-24 flex text-white">
            <div className="px-20 my-20 border-r-2">
                <h3 className="text-5xl pb-4 font-bold">Lorem Ipsum Dolor Sit</h3>
                <p className="text-justify pb-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt eos nemo debitis aspernatur praesentium possimus quibusdam laboriosam repudiandae illum itaque explicabo molestias, laudantium eaque ut quam corporis tenetur saepe? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt eos nemo debitis aspernatur praesentium possimus quibusdam</p>
                <button className="bg-base-100 text-primary font-bold py-1.5 px-10 rounded-md">Learn More</button>
            </div>
            <div className="px-20 my-20">
                <h2 className="text-8xl font-bold">Lorem Ipsum Dolor Sit Amet Consecteur</h2>
                <img className='mt-24 mb-8' src={Zigzag} alt="" />
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt eos nemo debitis aspernatur praesentium possimus quibusdam laboriosam repudiandae illum itaque explicabo molestias, laudantium eaque ut quam corporis tenetur saepe? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt eos nemo debitis aspernatur praesentium possimus quibusdam</p>
            </div>
        </div>
    </section>
  )
}

export default Purplebox