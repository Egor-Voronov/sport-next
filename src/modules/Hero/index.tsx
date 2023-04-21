import {Button, Container, createStyles, Overlay, rem, Text, Title} from '@mantine/core';
import {useStyles} from './styles'

export const HeroModule = () => {
    const {classes} = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>A fully featured React components library</Title>
                <Text className={classes.description} size="xl" mt="xl">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eos quas quibusdam repellat similique temporibus. Ab asperiores atque cupiditate debitis dolorum fugit illo in nemo non pariatur quo ratione similique sint, voluptas!
                </Text>

                <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
                    Get started
                </Button>
            </Container>
        </div>
    );
}