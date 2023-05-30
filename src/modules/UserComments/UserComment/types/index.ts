export interface UserCommentProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}
