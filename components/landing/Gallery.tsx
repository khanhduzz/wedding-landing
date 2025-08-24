export default function Gallery() {
  const imgs = ["/images/gallery1.jpg","/images/gallery2.jpg","/images/gallery3.jpg","/images/gallery4.jpg"];
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-heading text-primary mb-6">Our Journey</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <img key={i} loading="lazy" src={src} alt={`Gallery ${i+1}`} className="rounded-2xl h-40 w-full object-cover" />
        ))}
      </div>
    </div>
  );
}
