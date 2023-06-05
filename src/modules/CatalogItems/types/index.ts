export interface ICatalogItem {
  id: number;
  images: string[];
  heading: string;
  paragraph: string;
  clarification: { heading: string, description: string }[];
}