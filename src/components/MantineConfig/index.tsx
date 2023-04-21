import {useState} from 'react';
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {IMantineConfigProps} from "./types"

export const MantineConfig = ({children}: IMantineConfigProps) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
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