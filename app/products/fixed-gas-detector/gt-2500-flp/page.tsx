import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquirySection } from "@/components/site/EnquirySection";
import { Breadcrumb } from "@/components/products/Breadcrumb";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfoPanel } from "@/components/products/ProductInfoPanel";
import type { ProductData } from "@/lib/products/types";

/** Replace with CMS fetch when ready. Shape must match ProductData. */
const product: ProductData = {
  slug: "gt-2500-flp",
  model: "GT-2500-FLP",
  name: "Smart Gas Detector with LED Display",
  category: "Fixed Gas Detector",
  categoryHref: "/products/fixed-gas-detector",
  description:
    "The GT-2500-FLP, a PESO certified Flameproof Smart Gas Detector/Transmitter, stands as a robust solution for the swift and dependable detection of Oxygen, Toxic, Combustible, and Volatile Organic Compounds (VOC) gas leaks. Its user-friendly design includes a 7-Segment LED display for digital gas concentration readouts and 8 LEDs providing clear indications of the instrument's status. With a standard 4-20mA signal output and three relay outputs, each with a 5A rating for both AC and DC, it ensures seamless integration into monitoring systems. The optional Isolated RS-485 Communication Port with MODBUS RTU PROTOCOL enhances connectivity. The device boasts a hot-swappable gas sensor module, allowing for easy maintenance and servicing, and features non-intrusive programming for the Flameproof Model using a Magnetic Wand.",
  images: [
    {
      src: "/assets/products/fixed-gas-detector/GT-2500-FLP-1.webp",
      alt: "GT-2500-FLP Smart Gas Detector with LED Display — front view",
    },
    {
      src: "/assets/products/fixed-gas-detector/GT-2500-FLP-1.webp",
      alt: "GT-2500-FLP Smart Gas Detector with LED Display — side view",
    },
    {
      src: "/assets/products/fixed-gas-detector/GT-2500-FLP-1.webp",
      alt: "GT-2500-FLP Smart Gas Detector with LED Display — detail view",
    },
    {
      src: "/assets/products/fixed-gas-detector/GT-2500-FLP-1.webp",
      alt: "GT-2500-FLP Smart Gas Detector with LED Display — installed view",
    },
  ],
  videoId: "MhVw2XZouzk",
  features: [
    {
      title: "Versatile Gas Detection",
      body: "Gas Detector detects the smallest leaks of Oxygen, Toxic, Combustible, and Volatile Organic Compounds (VOC).",
    },
    {
      title: "Modular Design",
      body: "Smart, pluggable gas sensor module for easy replacement and maintenance.",
    },
    {
      title: "Data Storage",
      body: "Calibration, alarm, offset, and output current data saved in the sensor module for efficient maintenance.",
    },
    {
      title: "Poisoning Resistance",
      body: "Gas Detector is highly resistant to poisoning and etching for prolonged sensor life.",
    },
    {
      title: "Detection Range",
      body: "Capable of detecting down to PPM, %V/V, %LEL, mg/m³.",
    },
    {
      title: "Display and Indicators",
      body: "2-Line, 4-Digit LED display with 8 LEDs indicating instrument status.",
    },
    {
      title: "Alarm Indications",
      body: "Alerts for 'Sensor Open', 'Over Range', 'Sensor Replace', 'Cal Due', 'Cal Fail', mA Loop Open.",
    },
    {
      title: "Output Signals",
      body: "Standard 4-20mA signal output with configurable range.",
    },
    {
      title: "Optional Set Points",
      body: "Configurable STEL and TWA set points for Toxic & VOC Gases.",
    },
    {
      title: "Communication Options",
      body: "Optional RS-485 Communication Port with MODBUS RTU PROTOCOL.",
    },
    {
      title: "Non-Intrusive Programming",
      body: "Flameproof model programmable using a magnetic wand without opening the enclosure cover.",
    },
    {
      title: "Security Features",
      body: "Password-protected programming with password changing facility.",
    },
    {
      title: "Alarm Acknowledgement",
      body: "Facility for acknowledging alarms from the front as well as the rear terminal.",
    },
    {
      title: "Test Mode",
      body: "Allows checking electronics, alarm LEDs, relays, and output current/voltage with or without a sensor module.",
    },
    {
      title: "Relay Contacts",
      body: "Optional relay contacts on board with two configurable alarm levels and one fail-safe relay.",
    },
  ],
  specs: [
    {
      label: "Flameproof Approval",
      value: "Ex db IIC T6 Gb IP 66/IP68.",
    },
    {
      label: "Certifications",
      value: "CIMFR and PESO certificates for flameproof enclosure.",
    },
    {
      label: "Intrinsically Safe Approval",
      value: "Ex d [ia] IIC T6 Ga Ex tb IIIC T85°C Db IP68.",
    },
    {
      label: "Sensor Technology",
      value: "Electrochemical / Catalytic / Pellistor / NDIR / PID / Solid State.",
    },
    { label: "Detection Method", value: "Diffusion." },
    {
      label: "Response Time",
      value: "Less than 15 seconds (depending on the type of gas).",
    },
    { label: "Power Supply", value: "18 to 36 VDC, Typically 24VDC." },
    { label: "Power Consumption", value: "Less than 3.6 Watts." },
    { label: "Operating Temperature", value: "-15 to +55°C." },
    { label: "Storage Temperature", value: "-10 to 60°C." },
    { label: "Humidity", value: "Less than 95% Non-Condensing." },
    {
      label: "Dimensions (Without Hooter cum Flasher)",
      value: "225 mm (H) × 225 mm (W) × 122 mm (D).",
    },
    {
      label: "Weight (Without Hooter cum Flasher)",
      value: "Approx. 2.2 kg.",
    },
    {
      label: "Optional Accessories",
      value:
        "Power supply, canopy & mounting stand, gas calibration kit, hooter cum flasher, gas sampling system, communication converters.",
    },
    {
      label: "Common Deliverables",
      value:
        "Test calibration certificate, reference calibration gas certificate, operational/instrument user manual, standard mounting hardware.",
    },
  ],
  applications: [
    "Refineries",
    "Gas Cylinder Bank",
    "Cold Storage",
    "Oil & Gas Industries",
    "Sewage Plants",
    "Gas Pipeline Project",
    "Fertilizers Plants",
    "Pulp & Paper Plants",
    "Stack Monitoring",
    "Gas Metering Station",
    "Chlorination Plant",
    "Burner / Furnace Areas",
    "Ambient Monitoring",
    "Bullet Yard / Storage Yard",
    "Gas Metering Skid",
    "Chemical Processing Plant",
    "Heat Treatment Plants",
    "Chemical Storage Area",
    "Control Atmosphere",
    "Power & Industrial Plants",
    "Acid Alkalizes & Dyes Mfg. Plants",
    "Offshore Drilling & Processing Platforms",
    "Coal Mine and Confined Area",
    "Chemical & Petrochemical Plants",
    "Automotive Industries / Paint Shops",
  ],
};

export default function GT2500FLPPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 pt-[88px] md:pt-[104px] pb-12 md:pb-20">

          {/* Product layout — columns stretch so the gallery can stick while the
              breadcrumb scrolls in step with the heading (kept top-aligned). */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

            {/* ── Left: sticky breadcrumb + sticky image gallery ──────── */}
            <div className="flex flex-col gap-6">
              <div
                className="lg:sticky lg:top-[104px] z-20 py-2"
                style={{ background: "var(--surface-primary)" }}
              >
                <Breadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: product.category, href: product.categoryHref },
                    { label: product.model },
                  ]}
                />
              </div>
              <div className="lg:sticky lg:top-[150px]">
                <ProductGallery
                  images={product.images}
                  videoId={product.videoId}
                  productName={product.name}
                />
              </div>
            </div>

            {/* ── Right: scrollable product info ─────────────────────── */}
            <ProductInfoPanel
              model={product.model}
              name={product.name}
              description={product.description}
              features={product.features}
              specs={product.specs}
              applications={product.applications}
              datasheetHref={product.datasheetHref}
            />

          </div>
        </div>
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
