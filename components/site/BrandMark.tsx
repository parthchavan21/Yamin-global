/** Yamin Global wordmark + blueprint "target" glyph (v2 homepage). */
export function BrandMark() {
  return (
    <>
      <span className="flex h-8 w-8 items-center justify-center bg-yg-blue">
        <span className="relative block h-3 w-3 rounded-full border-[2.5px] border-white">
          <span className="absolute inset-[2px] rounded-full bg-white" />
        </span>
      </span>
      <span className="text-[18px] font-bold tracking-[-0.02em]">
        YAMIN<span className="font-medium text-[#9AA4B2]"> GLOBAL</span>
      </span>
    </>
  );
}
