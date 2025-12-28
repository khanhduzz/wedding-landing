export default function WeddingDetails() {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-heading mb-10 text-gray-800">
        Wedding Details
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <img
            src="/images/couple-1.jpg"
            alt="Bride and Groom"
            className="w-full rounded-xl shadow-md mb-4"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/venue.jpg"
            alt="Venue"
            className="w-full rounded-xl shadow-md mb-4"
          />
          <p className="mt-2 text-gray-700 font-medium">
            Masjid Raya Baiturrahman, Banda Aceh, Indonesia
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/couple-2.jpg"
            alt="Couple"
            className="w-full rounded-xl shadow-md mb-4"
          />
        </div>
      </div>

      {/* Schedule */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700">Akad Nikah</h3>
          <p className="mt-2 text-gray-600">Thursday, March 11th, 2021</p>
          <p className="text-gray-500">07.00 WIB</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700">Resepsi Nikah</h3>
          <p className="mt-2 text-gray-600">Thursday, March 11th, 2021</p>
          <p className="text-gray-500">18.00 WIB</p>
        </div>
      </div>
    </div>
  );
}
