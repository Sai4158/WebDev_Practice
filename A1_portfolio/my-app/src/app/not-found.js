export default function Custom404() {
  return (
    <div className="flex mt-10 justify-center w-full h-screen text-white text-center px-4 font-thin">
      <div>
        <h1 className="text-9xl font-bold text-red-200">404!</h1>
        <p className="text-6xl mb-8 mt-10">
          This page is playing hide and seek.
        </p>
        <button className="mt-8">
          <a
            href="/"
            className="bg-blue-800 hover:bg-blue-600 text-white py-4 px-10 text-xl rounded-lg transition-all duration-300 ease-in-out"
          >
            Take me back home
          </a>
        </button>
      </div>
    </div>
  );
}
