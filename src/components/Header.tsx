import { Box, Heading, IconButton, NativeSelect, HStack } from '@chakra-ui/react';
import { LuSun, LuMoon, LuArrowBigRightDash } from 'react-icons/lu';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Framework } from '../types';


export default function Header({onFrameworkChange}: { onFrameworkChange: (fw: Framework) => void }) {
    const { theme, toggleTheme } = useContext(AppContext);
    const [framework, setFramework] = useState('chakra' as Framework);

    const handleFrameworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFramework = e.target.value as Framework;
        setFramework(selectedFramework);
        onFrameworkChange(selectedFramework);
    };

    return (
        <Box position="fixed" top={0} left={0} right={0} py={4} bg="green.500" color="black" boxShadow={"lg"}>
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
                <Heading size="4xl" textAlign="center" fontWeight={"bold"}>
                    CSS Sandbox
                </Heading>
                <HStack alignItems="center">
                    <Heading fontWeight={"semibold"} color={'black'}>Framework</Heading>
                    <IconButton
                        as={LuArrowBigRightDash}
                        aria-label="Select framework"
                        variant={"ghost"}
                        color={'black'}
                        rounded={"full"}
                        ></IconButton>
                    <NativeSelect.Root width="240px" size="md" mr={3}>
                        <NativeSelect.Field placeholder="Select framework"
                            value={framework}
                            onChange={handleFrameworkChange}
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
            </HStack>
        </Box>
    );
};