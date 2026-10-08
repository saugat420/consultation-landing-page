import Image from "next/image";

export function Header() {
  return (
    <header className="brand-header px-5 py-3.5 sm:py-4">
      <div className="mx-auto flex max-w-6xl justify-center">
        <Image src="/digital-saugat-logo.png" alt="Digital Saugat" width={1112} height={224} priority className="h-auto w-[190px] object-contain sm:w-[228px]" />
      </div>
    </header>
  );
}
