import Image from "next/image";

export default function Location() {
  return (
    <section className="px-6 py-16 lg:px-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl max-w-6xl mx-auto">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">

        {/* Textbereich */}
        <div className="prose prose-gray max-w-xl text-center md:text-left">
          <h2>Kunstort am See</h2>
          <p>
            Eingebettet in die Natur bietet das Kunsthaus am See Raum für kreative Prozesse, Rückzug und Begegnung. 
            Die Umgebung inspiriert, beruhigt und eröffnet neue Perspektiven – für Künstler:innen und Besucher:innen gleichermaßen.
          </p>
        </div>

        {/* Bildbereich */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <Image
            src="/location.jpg"
            alt="Kunsthaus am See"
            width={800}
            height={600}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
