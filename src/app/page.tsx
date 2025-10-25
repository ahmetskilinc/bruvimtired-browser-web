import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex-col text-center p-16 bg-white dark:bg-black">
      <p className="text-xl font-mono">bruvimtired browser - coming soon.</p>
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <p>
          <Link href="https://x.com/bruvimtired">X (Twitter)</Link>
        </p>
        <p>
          <Link href="https://github.com/ahmetskilinc">GitHub</Link>
        </p>
      </div>
    </main>
  );
}
