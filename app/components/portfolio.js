import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Leben",
    imageUrl: "/leben.jpg",
  },
  {
    id: 2,
    title: "Aufstieg",
    imageUrl: "/aufstieg.jpg",
  },
  {
    id: 3,
    title: "Frau",
    imageUrl: "/frau.jpg",
  },
  {
    id: 5,
    title: "Mann",
    imageUrl: "/mann.jpg",
  },
  {
    id: 4,
    title: "Ausdruck",
    imageUrl: "/ausdruck.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="px-6 py-12 lg:px-20">
      <div className="prose prose-gray max-w-xl">
        <h2 className="mb-6">
          Ausgewählte Projekte
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <div className="max-w-md rounded-md shadow-lg not-prose">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-md object-cover"
                width={600}
                height={1000}
              />
            </div>
            <p className="mt-2 text-lg font-medium prose prose-gray">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
