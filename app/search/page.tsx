import Link from "next/link";

export default function Search() {
  return (
    <main className="bg-white min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar starts */}
        <nav className="bg-white p-2 flex justify-between">
          <Link
            href="/"
            className="font-bold text-gray-700 py-2 px-3 text-center"
          >
            Book My Table
          </Link>
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
              <h1 className="text-white text-4xl font-bold px-3 py-5">
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

          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            {/* side search bar starts */}
            <div className="w-1/5">
              <div className="border-b pb-4 text-black">
                <h1 className="mb-2">Region</h1>
                <p className="font-light text-reg">Toronto</p>
                <p className="font-light text-reg">Ottawa</p>
                <p className="font-light text-reg">Montreal</p>
                <p className="font-light text-reg">Hamilton</p>
                <p className="font-light text-reg">Kingston</p>
                <p className="font-light text-reg">Niagara</p>
              </div>
              <div className="border-b pb-4 mt-3 text-black">
                <h1 className="mb-2">Cuisine</h1>
                <p className="font-light text-reg">Mexican</p>
                <p className="font-light text-reg">Italian</p>
                <p className="font-light text-reg">Chinese</p>
              </div>
              <div className="mt-3 pb-4 text-black">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                  <button className="border w-full text-reg font-light rounded-l p-2">
                    $
                  </button>
                  <button className="border-r border-t border-b w-full text-reg font-light p-2">
                    $$
                  </button>
                  <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
                    $$$
                  </button>
                </div>
              </div>
            </div>
            {/* side search bar ends */}
            <div className="w-5/6">
              {/* restarant card starts */}
              <div className="border-b flex pb-5">
                <img
                  src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                  alt=""
                  className="w-44 rounded"
                />
                <div className="pl-5">
                  <h2 className="text-3xl text-black">
                    Aiāna Restaurant Collective
                  </h2>
                  <div className="flex items-start text-black">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                  </div>
                  <div className="mb-9">
                    <div className="font-light flex text-reg text-black">
                      <p className="mr-4">$$$</p>
                      <p className="mr-4">Mexican</p>
                      <p className="mr-4">Ottawa</p>
                    </div>
                  </div>
                  <div className="text-red-600">
                    <a href="">View more information</a>
                  </div>
                </div>
              </div>
              {/* restarant card ends */}
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
