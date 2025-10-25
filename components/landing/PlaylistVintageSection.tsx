export default function PlaylistVintageSection() {
  return (
    <section className="bg-[#f4eee8] py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left side: text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-script text-[#5b4636] mb-4">
            Music We Love
          </h2>
          <p className="text-[#7c6a58] mb-6 text-lg italic">
            Listen to our wedding vibes — songs that make our hearts dance.
          </p>
          <p className="text-[#7c6a58]/90 leading-relaxed">
            These melodies carry our memories, laughter, and the moments that
            brought us together. Feel free to play them and join the rhythm of
            our story.
          </p>
        </div>

        {/* Right side: video */}
        <div className="lg:w-1/2 w-full">
          <div className="border-4 border-[#d6c8b0] rounded-2xl shadow-inner overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/327_OFjUOfo"
              title="Wedding Playlist"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
