interface Project {
  url: string;
  bg: string;
  brand?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
  quote: string,
  git?: string;
  live?: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];        // array of tags
  year: string;
  next: string;
  nextTitle: string;
}