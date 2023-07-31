import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>This is your landing page</div>
      <Link
        href="/dashboard"
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
