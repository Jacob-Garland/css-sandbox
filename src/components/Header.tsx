import { Box, Heading, Icon, NativeSelect, HStack, Text } from '@chakra-ui/react';
import { LuArrowBigRightDash } from 'react-icons/lu';
import { useState } from 'react';
import { Framework } from '../types';
import { ColorModeButton } from './ui/color-mode';


export default function Header({onFrameworkChange}: { onFrameworkChange: (fw: Framework) => void }) {
    const [framework, setFramework] = useState('chakra' as Framework);

    const handleFrameworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFramework = e.target.value as Framework;
        setFramework(selectedFramework);
        onFrameworkChange(selectedFramework);
    };

    return (
        <Box position="fixed" top={0} left={0} right={0} py={4} bg="green.500" color="black" boxShadow={"lg"}>
            <HStack justifyContent="space-between" alignItems="center" px={4}>
                <ColorModeButton
                    aria-label="Toggle theme"
                    variant={"ghost"}
                    color={'black'}
                    rounded={"full"}
                    ml={7}
                />
                <Heading textAlign="center" fontWeight={"bold"}>
                    CSS Sandbox
                </Heading>
                <HStack alignItems="center">
                    <Text fontWeight={"semibold"} fontSize={'xl'} color={'black'} textAlign={'center'} mt={3}>Framework Selection</Text>
                    <Icon
                        as={LuArrowBigRightDash}
                        boxSize={10}
                        color={'black'}
                        rounded={"full"}
                        ></Icon>
                    <NativeSelect.Root width="240px" size="md" mr={3}>
                        <NativeSelect.Field placeholder="Select framework"
                            value={framework}
                            onChange={handleFrameworkChange}
                            color={'black'}
                            bg={'yellow.200'}
                            fontWeight={"bold"}
                            fontSize={"lg"}
                            borderRadius={"md"}
                            borderWidth={3}
                            borderColor={{ base: "white", _dark: "black" }}
                        >
                            <option value="chakra">Chakra UI</option>
                            <option value="bootstrap">Bootstrap</option>
                            <option value="tailwind">Tailwind CSS</option>
                            <option value="bulma">Bulma</option>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </HStack>
            </HStack>
        </Box>
    );
};