import { Title, Text, Button, Container } from "@mantine/core";
import { useStyles } from "./styles";
import { Dots } from "./Dots";
import { FC, useContext } from "react";
import { LinksContext } from "../../../ui/NavigationLinks/NavigationLinksContext";
import Link from "next/link";

export const ReviewsHero: FC = () => {
  const { classes } = useStyles();
  const { active, setActiveLink } = useContext(LinksContext);

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Мы дорожим{" "}
          <Text component="span" className={classes.highlight} inherit>
            каждым
          </Text>{" "}
          вашим отзывом
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Сделав отзыв на нашу продукцию, вы поможете сделать наши спортивные
            товары лучше, чем когда бы то ни было.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link
            href="/catalog"
            onClick={() => setActiveLink("/catalog")}
            className={classes.control}
          >
            <Button size="lg" variant="default" color="gray">
              В каталог
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
