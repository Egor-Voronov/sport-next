import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
} from "@mantine/core";
import { useStyles } from "./styles";
import type { UserCommentProps } from "./types";
import type { FC, PropsWithChildren } from "react";

export const UserComment: FC<PropsWithChildren<UserCommentProps>> = ({
  postedAt,
  body,
  author,
}) => {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text fz="sm">{author.name}</Text>
          <Text fz="xs" c="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
};
