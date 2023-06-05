import { UserComment } from "./UserComment";
import {useState, useEffect} from "react";
import type { FC } from "react";
import { useStyles } from "./styles";
import { Heading } from "../../ui/Heading";
import {fetchComments} from "../../../api/operations/fetchData.mjs";

export const UserComments: FC = () => {
  const { classes } = useStyles();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments[0].comments);
    };

    fetchData();
  }, []);

  console.log(comments)

  return (
    <div className={classes.container}>
      <Heading text="отзывы" />
      {comments.map((comment) => (
        <UserComment
          key={comment.id}
          postedAt={comment.postedAt}
          body={comment.text}
          author={comment.author}
        />
      ))}
    </div>
  );
};
