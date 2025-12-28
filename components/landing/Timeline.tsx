export default function Timeline() {
  const events = [
    { time: "3:00 PM", title: "Ceremony begins" },
    { time: "4:00 PM", title: "Photos & mingle" },
    { time: "6:00 PM", title: "Dinner" },
    { time: "8:00 PM", title: "Dance party" },
  ];

  return (
    <div className="bg-ink/5 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-primary mb-6">
          Schedule of Events
        </h2>
        <ol className="relative border-l border-ink/20 pl-6">
          {events.map((e, i) => (
            <li key={i} className="mb-6">
              <div className="absolute -left-2.5 w-5 h-5 bg-primary rounded-full border border-white"></div>
              <div className="text-sm text-ink/60">{e.time}</div>
              <div className="text-lg">{e.title}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
