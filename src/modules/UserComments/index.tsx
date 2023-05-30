import { UserComment } from "./UserComment";
import type { FC } from "react";
import image from "public/assets/logo.svg";
import { useStyles } from "./styles";

export const UserComments: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <UserComment
        postedAt={"10"}
        body={"lorem30 lorem30 lorem30 lorem30"}
        author={{ name: "egor", image: image.src }}
      />
      <UserComment
        postedAt={"10"}
        body={"lorem30"}
        author={{ name: "egor", image: image.src }}
      />
      <UserComment
        postedAt={"10"}
        body={"lorem30"}
        author={{ name: "egor", image: image.src }}
      />
      <UserComment
        postedAt={"10"}
        body={"lorem30"}
        author={{ name: "egor", image: image.src }}
      />
    </div>
  );
};
