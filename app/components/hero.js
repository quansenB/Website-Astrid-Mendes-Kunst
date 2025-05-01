import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-12 lg:px-20">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-16">
        {/* Textbereich mit Prose */}
        <div className="prose prose-gray max-w-xl text-center md:text-left">
          <div className="prose prose-gray max-w-xl">
            <h1 className="">Kunsthaus am See</h1>
            <p className="">Ein Projekt von Astrid Mendes da Vitoria</p>
          </div>
        </div>

        {/* Bildbereich */}
        <div className="w-full max-w-sm">
          <Image
            src="/Astrid_malend.jpg"
            alt="Hero Image"
            width={640}
            height={480}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
