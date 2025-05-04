import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 px-6 py-12 lg:px-20">
      <div className="prose prose-sm prose-gray max-w-none mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p>
          &copy; {new Date().getFullYear()}  Kunsthaus am See. Alle Rechte vorbehalten.
        </p>
        <nav className="flex gap-6">
          <Link href="/impressum-datenschutz" className="no-underline hover:underline">
            Impressum & Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
