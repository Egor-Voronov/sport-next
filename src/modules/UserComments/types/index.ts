
export interface IComment {
  id: number;
  postedAt: string;
  text: string;
  author: { name: string, image: string };
}