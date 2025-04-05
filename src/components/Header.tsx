import { Box, Heading, IconButton, NativeSelect } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


export default function Header() {
    const { framework, setFramework, theme, toggleTheme } = useContext(AppContext);

    return (
        <Box position="fixed" top={0} left={0} right={0} p={4} bg="green.500" color="black">
            <IconButton
                as={theme === 'light' ? FaMoon : FaSun}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                variant={"ghost"}
                mr={4}
            />
            <Heading as="h1" size="lg" textAlign="center" display="inline">My App</Heading>
            <NativeSelect.Root width="320px" size="md">
                <NativeSelect.Field placeholder="Select framework"
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                >
                    <option value="chakra">Chakra UI</option>
                    <option value="bootstrap">Bootstrap</option>
                    <option value="tailwind">Tailwind CSS</option>
                    <option value="bulma">Bulma</option>
                </NativeSelect.Field>
            </NativeSelect.Root>
        </Box>
    );
};