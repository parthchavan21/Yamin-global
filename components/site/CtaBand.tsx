import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section style={{ background: "var(--surface-inverted)" }}>
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <div>
          <h2 className="t-h2" style={{ margin: "0 0 8px", color: "var(--content-inverted)" }}>
            Specify your monitoring system
          </h2>
          <p style={{ margin: 0, color: "var(--neutral-400)", fontSize: 15 }}>
            Send us your site requirements — an engineer responds within one business day.
          </p>
        </div>
        <Button size="lg" className="w-full md:w-auto">Request a quote</Button>
      </div>
    </section>
  );
}
