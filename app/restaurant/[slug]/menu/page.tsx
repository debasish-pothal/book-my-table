import Link from "next/link";

export default function RestaurantMenu() {
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
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-blue-900 to-indigo-700 h-full flex justify-center items-center">
            <h1 className="text-7xl text-white captitalize text-shadow text-center">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <nav className="flex text-reg text-black border-b pb-2">
              <Link href="/restaurant/test" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/test/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESAURANT NAVBAR */} {/* MENU */}
            <main className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl text-black">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className=" border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg text-black">
                      Surf and Turf
                    </h3>
                    <p className="font-light mt-1 text-sm text-black">
                      A well done steak with lobster and rice
                    </p>
                    <p className="mt-7 text-black">$80.00</p>
                  </div>
                  {/* MENU CARD */}
                </div>
              </div>
            </main>
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
