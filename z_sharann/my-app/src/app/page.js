import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  text-white">
      <header className="py-10 bg-gray-800 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Hello, I am Sharan Balla</h1>
          <p className="mt-2 text-lg">Welcome to my personal page</p>
        </div>
      </header>

      <main className="container mx-auto p-6 lg:p-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Profile Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg text-center lg:text-left">
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6">
              <Image
                src="https://i.ibb.co/HdcZB1d/IMG-9379.jpg"
                alt="Profile"
                className="rounded-full object-cover"
                layout="fill"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 animate-pulse">
              I like playing chess
            </h2>
            <h2 className="text-xl font-semibold mb-2">
              I like playing PlayStation
            </h2>
            <h3 className="text-lg font-semibold">Favorite food: Biryani</h3>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <button className="px-4 py-2 bg-purple-700 rounded-full font-bold hover:bg-purple-800 transition-colors duration-300">
                Follow
              </button>
              <button className="px-4 py-2 bg-pink-700 rounded-full font-bold hover:bg-pink-800 transition-colors duration-300">
                Message
              </button>
            </div>
          </section>

          {/* About Me Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              About Me
            </h2>
            <p className="text-lg font-semibold mb-2">
              Institution: ISU Netherlands
            </p>
            <p className="text-lg font-semibold mb-2">Age: 12</p>
            <h2 className="text-3xl font-bold mb-4 mt-6 text-center lg:text-left">
              Fun Facts
            </h2>
            <p className="text-lg font-semibold mb-2">
              I can solve a Rubik&apos;s Cube in under a minute!
            </p>
            <p className="text-lg font-semibold mb-2">
              I have a collection of over 100 comic books.
            </p>
            <p className="text-lg font-semibold mb-2">
              I once won a hot dog eating contest!
            </p>
          </section>

          {/* Random Joke Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Random Joke</h2>
            <p className="text-lg mt-2 animate-spin-slow font-semibold">
              Why don&apos;t scientists trust atoms? Because they make up
              everything!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
