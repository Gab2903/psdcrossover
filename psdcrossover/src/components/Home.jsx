import img1 from "../images/img1.png";
import zigzag from "../images/zigzag.png";
import line from "../images/line.png";
import arrrow from "../images/arrow.png";
import arrrow1 from "../images/arrow1.png";
const Home = () => {
  return (
    <>
      <div className=" w-full overflow-hidden relative">
        <div className="h-full w-full">
          <img src={img1} className="h-full w-full object-cover" />
        </div>
        <div className=" absolute bottom-0 right-0 mr-12 mb-40 ">
          <p className="font-bold text-3xl text-white">
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Soluta, quisquam?
          </p>
          <button className=" text-white border border-white p-2 rounded-lg mt-2	">
            Explore more
          </button>
        </div>
      </div>
      {/* cards teil */}
      <div className="flex justify-center items-center mt-12">
        <figure className="px-10 pt-10">
          <img src={arrrow1} alt="arrow" className="rounded-xl" />
        </figure>
        {/* <div> */}
        <div className=" mr-2 card bg-base-100 w-96 shadow-xl mt-4 border border-solid border-blue-600">
          <figure className="px-10 pt-10">
            <img src={zigzag} alt="zigzag" className="rounded-xl" />
          </figure>
          <figure className="mx-5 mt-4">
            <img src={line} alt="line" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi
              tenetur natus voluptate deleniti, molestiae aliquid suscipit
              impedit. Distinctio, expedita.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary px-12 mt-4">LearnMore</button>
            </div>
          </div>
        </div>
        <div className=" ml-2 card bg-base-100 w-96 shadow-xl mt-4 border border-solid border-blue-600">
          <figure className="px-10 pt-10">
            <img src={zigzag} alt="zigzag" className="rounded-xl" />
          </figure>
          <figure className="mx-5 mt-4">
            <img src={line} alt="line" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi
              tenetur natus voluptate deleniti, molestiae aliquid suscipit
              impedit. expedita.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary px-12 mt-4">LearnMore</button>
            </div>
          </div>
          {/* </div> */}
        </div>
        <figure className="px-10 pt-10">
          <img src={arrrow} alt="arrow" className="rounded-xl" />
        </figure>
      </div>
      {/* search teil */}
      <div className="bg-[#480ad0] py-24 mt-24">
        <h1 className="text-center font-bold text-white text-4xl mb-8">
          Join our Newsletter
        </h1>
        <label className="input input-bordered flex items-center mx-96 rounded-full ">
          <input
            type="text"
            className="grow"
            placeholder="Type your email here..."
          />
          <button className="badge badge-info">Submit</button>
        </label>
      </div>
      {/* bottom teil */}
      <div>
        <p className=" text-wrap text-center mt-12 mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
          repudiandae. <br /> Odio magnam rerum animi molestias, possimus
          reprehenderit ut voluptatum, <br />
          laboriosam, quidem facilis voluptates nostrum cupiditate veritatis
          sapiente quam voluptate <br /> sunt deserunt. Labore molestiae, harum
          ad dolores ipsum maxime ratione <br /> sit hic nemo. Nulla cum quasi
          consequuntur, blanditiis quos aperiam doloremque?
        </p>
      </div>

      <div className="bg-[#480ad0] flex justify-evenly items-center mx-20 mt-12 mb-24 h-72 ">
        <h1 className="text-center font-bold text-white text-5xl mt-8 mr-24">
          Lorem Ipsom <br /> Dolor Sit
        </h1>
        <div className="mt-8">
          <p className="text-white text-wrap">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quae
            nisi tenetur natus <br /> voluptate deleniti, molestiae aliquid{" "}
            <br />
            suscipit impedit. Distinctio, expedita.
          </p>
          <button className="btn btn-primary px-12 mt-4 border border-solid border-white">
            LearnMore
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
