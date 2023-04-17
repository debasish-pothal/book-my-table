import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar starts */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 py-2 px-3 text-center">
            Book My Table
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
                Sign in
              </button>
              <button className="text-black border px-3 py-2 rounded-md text-sm font-medium ml-2 hover:cursor-pointer">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        {/* navbar ends */}
        <main>
          {/* header starts */}
          <div className="h-56 bg-gradient-to-r from-blue-900 to-indigo-700">
            <div className="text-center">
              <h1 className="text-white text-4xl font-bold p-3">
                Find your table for any occasion
              </h1>

              {/** search bar starts */}
              <div className="text-left py-3 m-auto flex justify-center">
                <input
                  type="text"
                  placeholder="State, City or Town"
                  className="bg-white text-black rounded-md text-sm mr-3 py-2 px-4 w-96 outline-none"
                />
                <button className="text-white bg-red-500 px-4 py-2 rounded-md text-sm font-medium ml-2 hover:cursor-pointer">
                  Find
                </button>
              </div>
              {/** search bar ends */}
            </div>
          </div>
          {/* header ends */}
          {/* cards starts */}
          <div className="py-3 px-20 mt-8 flex flex-wrap justify-center">
            {/* card starts */}
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">Mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
              </div>
            </div>
            {/* card ends */}
          </div>
          {/* cards ends */}
        </main>
      </main>
    </main>
  );
}
