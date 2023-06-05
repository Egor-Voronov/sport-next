import {
  Badge,
  Group,
  Title,
  SimpleGrid,
  Container,
} from "@mantine/core";
import { useStyles } from "./style";
import { FeaturesItem } from "./FeaturesItem";
import { props } from "./props";

export const Features = () => {
  const { classes } = useStyles();

  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Лучшие спортивные товары
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Мы обладаем множеством преимуществ
      </Title>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {props.map((feature) => (
          <FeaturesItem key={feature.id} feature={feature} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
