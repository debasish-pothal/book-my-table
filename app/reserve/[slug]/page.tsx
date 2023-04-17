import Link from "next/link";

export default function Reserve() {
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
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <div>
              <h3 className="font-bold text-black">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                  alt=""
                  className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold text-black">
                    Aiāna Restaurant Collective
                  </h1>
                  <div className="flex mt-3 text-black">
                    <p className="mr-6">Tues, 22, 2023</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER */} {/* FORM */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="bg-white text-black border rounded p-3 w-80 mb-4"
                placeholder="First name"
              />
              <input
                type="text"
                className="bg-white text-black border rounded p-3 w-80 mb-4"
                placeholder="Last name"
              />
              <input
                type="text"
                className="bg-white text-black border rounded p-3 w-80 mb-4"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="bg-white text-black border rounded p-3 w-80 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="bg-white text-black border rounded p-3 w-80 mb-4"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="bg-white text-black border rounded p-3 w-80 mb-4"
                placeholder="Requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm text-black">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Standard text message rates may
                apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
