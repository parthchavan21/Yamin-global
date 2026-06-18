/** Yamin Global wordmark + blueprint "target" glyph (v2 homepage). */
export function BrandMark() {
  return (
    <>
      <span
        style={{
          width: 32,
          height: 32,
          background: "#0E5FCB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            border: "2.5px solid #fff",
            borderRadius: "50%",
            position: "relative",
            display: "block",
          }}
        >
          <span style={{ position: "absolute", inset: 2, background: "#fff", borderRadius: "50%" }} />
        </span>
      </span>
      <span style={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: 18 }}>
        YAMIN<span style={{ color: "#9AA4B2", fontWeight: 500 }}> GLOBAL</span>
      </span>
    </>
  );
}
