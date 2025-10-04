export default function WeddingInfo() {
  const places = [
    {
      title: "Ceremony",
      img: "/images/grand-palace.jpg",
      desc: "Our ceremony will be held at the Grand Palace.",
      map: "https://maps.app.goo.gl/tFmp2cmgL6ptUM9M9",
    },
    {
      title: "Reception",
      img: "/images/the-adora.webp",
      desc: "Join us for dinner and dancing at the Adora.",
      map: "https://maps.app.goo.gl/gSwWkvh2tbyZ6DgLA",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-heading text-primary mb-6">
        Our Wedding Day
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {places.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl overflow-hidden shadow bg-white"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-heading">{p.title}</h3>
              <p className="text-sm text-ink/80">{p.desc}</p>
              <a
                className="inline-block mt-2 text-primary underline"
                href={p.map}
                target="_blank"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
