export default function Home() {
  return (
    <div>
      <main className="pt-20 px-4">
        <section className="text-center">
          <img
            src="https://psu.instructure.com/images/thumbnails/138133358/8TZ5AgbhGQPQ9mwZ815tEuohgNyHoaogq3UAHQjk"
            alt="Sai Rangineeni"
            className="w-40 h-40 rounded-full mx-auto mt-10"
          />
          <h1 className="text-5xl font-bold mt-6">Sai Rangineeni</h1>
          <p className="text-lg mt-4">
            SWE Intern @ CTFGuide | Junior @ Penn State | Data Science + HCDD
          </p>
          <p className="mt-4 max-w-2xl mx-auto">
            I’m happy to share that I’m starting a new position as Software
            Engineer Intern at CTFGuide. Exciting news to share! My friend and I
            recently won the Comcast OpenAI challenge at the Philly Codefest
            hosted by the Drexel University College of Computing & Informatics.
            Our winning project was an AI-powered chat assistant/sales
            representative that was trained on Comcast help articles. I'm
            thrilled to announce that the project is open-sourced on GitHub.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-100">
            <a href="/Contact">Contact</a>
          </button>
        </section>
      </main>
    </div>
  );
}
