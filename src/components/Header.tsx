import { Box, Heading, Icon, NativeSelect, HStack, Text } from '@chakra-ui/react';
import { LuArrowBigRightDash } from 'react-icons/lu';
import { Framework } from '../types';
import { ColorModeButton } from './ui/color-mode';
import { useFrameworkStore } from '../state/useFrameworkStore';

export default function Header() {
    const { currentFramework, setFramework } = useFrameworkStore();

    return (
        <Box position="fixed" top={0} left={0} right={0} py={4} 
            bg={{ base: "green.500", _dark: "green.700"}} 
            color="black" boxShadow="xl"
            borderColor={'black'} 
            borderWidth={3}>
            <HStack justifyContent="space-between" alignItems="center" px={4}>
                <ColorModeButton
                    aria-label="Toggle theme"
                    variant={"ghost"}
                    color={'black'}
                    rounded={"full"}
                    ml={7}
                />
                <Heading textAlign="center" fontWeight={"bold"} ml={32}>
                    CSS Sandbox
                </Heading>
                <HStack alignItems="center">
                    <Text fontWeight={"semibold"} fontSize={'xl'} color={'black'} textAlign={'center'} mt={3}>Framework Selection</Text>
                    <Icon
                        as={LuArrowBigRightDash}
                        boxSize={10}
                        color={'black'}
                        rounded={"full"}
                        animationName={"slide-to-right"}
                        animationDuration={"2s"}
                        animationTimingFunction={'ease-in-out'}
                        animationIterationCount={"infinite"}
                        ></Icon>
                    <NativeSelect.Root width="240px" size="md" mr={3} boxShadow={"md"}>
                        <NativeSelect.Field placeholder="Select Framework"
                            value={currentFramework ?? ''}
                            onChange={(e) => setFramework(e.target.value as Framework)}
                            color={{ base: 'black', _dark: 'white' }}
                            bg={{ base: 'purple.300', _dark: 'purple.700' }}
                            fontWeight={"bold"}
                            fontSize={"lg"}
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