"use client";

export default function GiftSection() {
  const account = "1234 5678 9012"; // replace with real account later
  function copy() {
    navigator.clipboard.writeText(account);
    alert("Account number copied. Thank you! 💝");
  }
  return (
    <div className="bg-ink/5 py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading text-primary mb-4">
          Gifts & Support
        </h2>
        <p className="text-ink/70 mb-4">
          Your presence is the greatest gift. If you wish to support us, you can
          scan the QR code below.
        </p>
        <div className="flex flex-row justify-center gap-6">
          <div>
            <img
              src="/qr/placeholder.png"
              alt="Donation QR"
              className="mx-auto w-48 h-48 rounded-2xl shadow bg-white object-contain"
            />
            <div className="mt-4">
              <button onClick={copy} className="rounded-xl border px-4 py-2">
                Copy Account Number
              </button>
            </div>
          </div>
          <div>
            <img
              src="/qr/placeholder.png"
              alt="Donation QR"
              className="mx-auto w-48 h-48 rounded-2xl shadow bg-white object-contain"
            />
            <div className="mt-4">
              <button onClick={copy} className="rounded-xl border px-4 py-2">
                Copy Account Number
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
