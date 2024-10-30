import Link from "next/link"

export default function header() {
  return (
    <div>
      <header className="items-center flex justify-between gap-2 p-8 text-white bg-black h-[30px] rounded-md">
        <h1 className="border-white border-2 p-2 bg-white text-black rounded-full text-[20px] font-bold font-sans">presentation</h1>
        <nav className="flex items-center gap-5">
        <span className="hover:underline"><Link href="/about">nextjs</Link></span>
        <span className="hover:underline"><Link href="/contact">contact</Link></span>
        <span className="hover:underline"><Link href="/">home</Link></span>
      </nav>
        </header>
    </div>
  )
}
