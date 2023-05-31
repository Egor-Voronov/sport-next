import { UserComment } from "./UserComment";
import type { FC } from "react";
import { useStyles } from "./styles";
import { props } from "./props";
import { Heading } from "../../ui/Heading";

export const UserComments: FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Heading text="отзывы" />
      {props.map((comment) => {
        return (
          <UserComment
            key={comment.id}
            postedAt={comment.postedAt}
            body={comment.text}
            author={comment.author}
          />
        );
      })}
    </div>
  );
};
