import { FC, useEffect, useState } from "react";
import { Heading } from "../../ui/Heading";
import { useStyles } from "./styles";

export const VideoPresentation: FC = () => {
  const { classes } = useStyles();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Heading text="видео-презентация" />
      {isClient && (
        <div className={classes.container}>
          <video
            controls
            poster="/assets/videoPresentation/poster.jpg"
            className={classes.video}
          >
            <source src="/assets/videoPresentation/video.mp4" />
          </video>
        </div>
      )}
    </>
  );
};
