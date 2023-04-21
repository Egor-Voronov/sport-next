import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {IMantineConfigProps} from "./types"
import {useColorScheme, useLocalStorage} from '@mantine/hooks';


export const MantineConfig = ({children}: IMantineConfigProps) => {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'color-scheme',
        defaultValue: preferredColorScheme,
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme,
                    loader: "bars"
                }}
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}