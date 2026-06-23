import Image from "next/image";

/** Yamin Global FZC company logo — used in the navbar and footer. */
export function BrandMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/assets/logo.svg"
      alt="Yamin Global FZC"
      width={344}
      height={285}
      priority
      unoptimized
      className={className}
    />
  );
}
