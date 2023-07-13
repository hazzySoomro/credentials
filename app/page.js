import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p4  justify-center flex flex-col items-center mb-2 min-h-full">
      <h1 className="text-[#6b9080] font-semibold text-4xl mb-12">
        Authentication with Next Auth (Credentials)
      </h1>
      <Link
        href="/register"
        className="hover:bg-[#a4c3b2] py-3 px-5 rounded-2xl mt-5 bg-[#cce3de] ease-in-out transition delay-100 hover:scale-105"
      >
        Don't have account? Register yourself
      </Link>
      <Link
        href="/login"
        className="hover:bg-[#a4c3b2] py-3 px-5 rounded-2xl mt-5 bg-[#cce3de] ease-in-out transition delay-100 hover:scale-105"
      >
        Already have account?
      </Link>
    </main>
  );
}
