import { Image, Accordion, Grid, Col, Container, Title } from "@mantine/core";
import image from "public/assets/FAQ/banner.svg";
import { useStyles } from "./styles";
import type { FC } from "react";
import { props } from "./props";

export const FAQ: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Container size="lg">
          <Grid id="faq-grid" gutter={50}>
            <Col span={12} md={6}>
              <Image src={image.src} alt="Frequently Asked Questions" />
            </Col>
            <Col span={12} md={6}>
              <Title order={2} ta="left" className={classes.title}>
                Часто Задаваемые Вопросы
              </Title>

              <Accordion
                chevronPosition="right"
                defaultValue="reset-password"
                variant="separated"
              >
                {props.map((item) => {
                  return (
                    <Accordion.Item
                      key={item.id}
                      className={classes.item}
                      value={item.title}
                    >
                      <Accordion.Control>{item.title}</Accordion.Control>
                      <Accordion.Panel>{item.description}</Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
