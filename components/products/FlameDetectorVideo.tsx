export function FlameDetectorVideo() {
  return (
    <section
      aria-labelledby="fld-video-heading"
      style={{
        background: "var(--surface-secondary)"
      }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: heading */}
          <div>
            <span className="t-label block mb-3" style={{ color: "var(--content-brand)" }}>
              Product video
            </span>
            <h2 id="fld-video-heading" className="t-h2" style={{ margin: "0 0 16px" }}>
              Watch Our Flame Detector Video
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: "24px", color: "var(--content-secondary)", maxWidth: 420 }}>
              See our advanced UV and IR flame detectors in action — built for rapid response
              and reliable detection across industrial environments.
            </p>
          </div>

          {/* Right: video */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "16/9",
              borderRadius: "var(--radius-lg)",
              background: "#000",
              border: "1px solid var(--border-primary)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/IIt1JR9LVnU?rel=0"
              title="Yamin Global Flame Detector Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
