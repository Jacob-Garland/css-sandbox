import { Box, Heading, IconButton, NativeSelect, HStack } from '@chakra-ui/react';
import { LuSun, LuMoon } from 'react-icons/lu';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Framework } from '../types';


export default function Header() {
    const { framework, setFramework, theme, toggleTheme } = useContext(AppContext);

    return (
        <Box position="fixed" top={0} left={0} right={0} py={4} bg="green.500" color="black" >
            <HStack justifyContent="space-between" alignItems="center" px={4}>
                <IconButton
                    as={theme === 'light' ? LuMoon : LuSun}
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    variant={"ghost"}
                    color={'black'}
                    rounded={"full"}
                    ml={7}
                />
                <Heading as="h1" size="lg" textAlign="center" fontStyle={"italic"} fontWeight={"bold"}>
                    CSS Sandbox
                </Heading>
                <NativeSelect.Root width="240px" size="md" mr={7}>
                    <NativeSelect.Field placeholder="Select framework"
                        value={framework}
                        onChange={(e) => setFramework(e.currentTarget.value as Framework)}
                        color={'black'}
                        bg={'gray.400'}
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        borderRadius={"md"}
                        borderWidth={2}
                        borderColor={theme === 'light' ? 'black' : 'white'}
                    >
                        <option value="chakra">Chakra UI</option>
                        <option value="bootstrap">Bootstrap</option>
                        <option value="tailwind">Tailwind CSS</option>
                        <option value="bulma">Bulma</option>
                    </NativeSelect.Field>
                </NativeSelect.Root>
            </HStack>
        </Box>
    );
};