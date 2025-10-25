"use client";

import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default function Guestbook() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-heading mb-6 text-primary text-center">
          Leave Us a Note
        </h2>
        <MessageForm />
        <div className="mt-10">
          <MessageList />
        </div>
      </div>
    </section>
  );
}
