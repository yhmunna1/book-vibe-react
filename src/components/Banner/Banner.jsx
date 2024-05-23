import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-base-200 py-10 px-16 rounded-2xl mt-10">
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/3 flex justify-end items-center">
              <img src="https://i.ibb.co/8xTh12s/pngwing-1.png" />
            </div>
            <div className="w-2/3 justify-center">
              <h1 className="text-7xl font-bold">Books to freshen up</h1>
              <h1 className="text-6xl font-bold text-blue-500 my-5">
                Your bookshelf
              </h1>
              <button className="btn bg-blue-500 text-white mt-5">
                <NavLink to="/listed-books">View The List</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
