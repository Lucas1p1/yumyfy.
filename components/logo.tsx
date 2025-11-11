import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-30 h-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-15-689f81903e652%20%281%29-vhvj4aa539O6VVyLtMAmqHaUlnIJ4j.png"
          alt="Yumyfy"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
