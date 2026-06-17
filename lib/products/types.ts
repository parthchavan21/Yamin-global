/** CMS-ready product types. Replace mock data with CMS fetch when ready. */

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductData = {
  slug: string;
  model: string;
  name: string;
  description: string;
  /** Parent category display name */
  category: string;
  /** Parent category page href */
  categoryHref: string;
  /** Ordered list of product images */
  images: ProductImage[];
  /** YouTube video ID — rendered as the last thumbnail in the gallery */
  videoId?: string;
  /** Key feature bullets shown in the Features tab */
  features?: ProductFeature[];
  /** Technical specification rows shown below features */
  specs?: ProductSpec[];
  /** Application area names shown in the Applications tab */
  applications?: string[];
  /** URL to the product datasheet PDF */
  datasheetHref?: string;
};
