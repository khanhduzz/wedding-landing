export default function PlaylistSection() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-heading text-primary mb-4">Music We Love</h2>
      <p className="text-ink/70 mb-4">Listen to our wedding vibes.</p>
      <div className="aspect-video rounded-2xl overflow-hidden shadow">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/327_OFjUOfo"
          title="Playlist"
          allowFullScreen
        />
      </div>
    </div>
  );
}
