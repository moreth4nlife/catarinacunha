export interface IPortfolioItem {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  keywords?: string[];
  featuredImage?: string;
  imageGallery?: string[];
  date?: string;
  imageHeight?: string;
  externalLink: string;
}