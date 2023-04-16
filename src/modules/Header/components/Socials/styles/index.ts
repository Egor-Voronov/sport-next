import {createStyles, rem} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    social: {
        width: rem(260),

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },
}));
