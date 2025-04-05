import { Box, Heading, IconButton, Select } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Framework } from '../types';

export default function Header() {
    const { framework, setFramework, theme, toggleTheme } = useContext(AppContext);

    return (
        <Box position="fixed" top={0} left={0} right={0} p={4} bg="green.500" color="black">
            <IconButton
                as={theme === 'light' ? FaMoon : FaSun}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                mr={4}
            />
            <Heading as="h1" size="lg" textAlign="center" display="inline">My App</Heading>
            <Select
                value={framework}
                onChange={(e) => setFramework(e.target.value as Framework)}
                width="200px"
                float="right"
                mr={4}
            >
                <option value="chakra">Chakra UI</option>
                <option value="bootstrap">Bootstrap</option>
                <option value="tailwind">Tailwind CSS</option>
                <option value="bulma">Bulma</option>
            </Select>
        </Box>
    );
};