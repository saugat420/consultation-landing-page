import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#08111f] px-5 py-3.5 sm:py-4">
      <div className="mx-auto flex max-w-6xl justify-center">
        <Image src="/logo.webp" alt="Digital Saugat" width={1112} height={224} priority className="h-auto w-[174px] object-contain sm:w-[206px]" />
      </div>
    </header>
  );
}
