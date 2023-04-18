import {Button, Container, Group, Text, Title} from '@mantine/core';
import {useRouter} from 'next/router'
import {useStyles} from './styles'
import {Meta} from 'src/components/seo/meta'

export const ServerError = () => {
    const {classes} = useStyles();
    const router = useRouter()

    return (
        <>
            <Meta title='Error 500 - Server Error'/>
            <div className={classes.root}>
                <Container>
                    <div className={classes.label}>500</div>
                    <Title className={classes.title}>Something bad just happened...</Title>
                    <Text size="lg" align="center" className={classes.description}>
                        Our servers could not handle your request. Don&apos;t worry, our development team was
                        already notified. Try refreshing the page.
                    </Text>
                    <Group position="center">
                        <Button variant="white" size="md" onClick={() => router.reload()}>
                            Refresh the page
                        </Button>
                    </Group>
                </Container>
            </div>
        </>
    );
}