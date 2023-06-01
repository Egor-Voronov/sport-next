import { createStyles, getStylesRef, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: rem(1000),
  },

  heading: {
    fontWeight: 900,
    margin: 0,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));
