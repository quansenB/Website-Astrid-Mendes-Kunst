"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setStatus(result.success ? "erfolgreich" : "fehlgeschlagen");
  };

  return (
    <section className="px-6 py-12 lg:px-20">
      <div className="prose prose-gray max-w-xl">
        <h2>Kontaktanfrage</h2>
        <p>
          Schreib mir gern direkt über dieses Formular. Ich melde mich so schnell wie möglich.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl space-y-6"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Dein Name"
            className="w-full rounded-xl border border-gray-600 p-4"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Deine E-Mail"
            className="w-full rounded-xl border border-gray-600 p-4"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Nachricht
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Deine Nachricht"
            rows="5"
            className="w-full rounded-xl border border-gray-600 p-4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-black p-4 text-white font-semibold"
        >
          Nachricht senden
        </button>

        {status && (
          <p className="text-center text-sm text-gray-800">
            Deine Anfrage war {status}.
          </p>
        )}
      </form>
    </section>
  );
}
