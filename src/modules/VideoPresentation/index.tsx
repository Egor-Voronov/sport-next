import type { FC } from "react";
import { Heading } from "../../ui/Heading";
import { useStyles } from "./styles";

export const VideoPresentation: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Heading text="видео-презентация" />
      <div className={classes.container}>
        <video controls>
          <source src="/assets/hero/video.mp4" />
        </video>
      </div>
    </>
  );
};
