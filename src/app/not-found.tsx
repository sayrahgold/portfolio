import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-display text-7xl text-gold">404</p>
      <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-block text-gold hover:text-gold-light">
        ← Back home
      </Link>
    </div>
  );
}
