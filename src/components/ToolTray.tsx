import { Box, VStack, Text, ColorPicker, Portal, HStack, parseColor, Slider, Button, NativeSelect } from '@chakra-ui/react';
import { useState } from 'react';
import { LuArrowRightLeft } from 'react-icons/lu';
import { useFontStore, fontOptions } from '../state/useFontStore';

export default function ToolTray() {
    const [value, setValue] = useState(parseColor('#FFFFFF'));
    const { selectedFont, setFont } = useFontStore();

    return (
        <Box position="fixed" right={4} top={28} bottom={0} width="300px" bg={{ base: "gray.200", _dark: "gray.600"}} p={4} borderRadius={"xl"}>
            <VStack gap={2}>
                <Box width="100%" height="50px" display="flex" alignItems="center" justifyContent="center" gap={7}>
                    <Text fontSize="2xl" fontWeight="bold" color={{ base: "green.600", _dark: "green.400" }} mb={2}>Tool Tray</Text>
                    <Button fontSize='lg' colorPalette="red" variant="solid">Reset</Button>
                </Box>

                <Box width="100%" height="100px" bg={{ base: "green.500", _dark: "green.700"}} borderRadius="lg" boxShadow="lg" display="flex-column" alignItems="center" justifyContent="center" p={4} mb={2}>
                    <ColorPicker.Root
                        defaultValue={value}
                        onValueChangeEnd={(e) => setValue(e.value)}
                    >
                        <ColorPicker.HiddenInput />
                        <ColorPicker.Label fontSize={'lg'} fontWeight={'bold'} color={{ base: 'black', _dark: 'white' }} textAlign={'center'}>
                            Color Picker
                        </ColorPicker.Label>
                        <ColorPicker.Control>
                            <ColorPicker.Input 
                                fontSize={'lg'} 
                                fontWeight={'semibold'}
                                bg={{ base: 'purple.300', _dark: 'purple.700' }} 
                                borderColor={{ base: "white", _dark: "black" }} 
                                borderWidth={2} 
                                color={{ base: 'black', _dark: 'white' }}
                                boxShadow={'md'} />
                            <ColorPicker.Trigger data-fit-content rounded='full'>
                                <ColorPicker.ValueSwatch rounded='inherit' />
                            </ColorPicker.Trigger>
                        </ColorPicker.Control>
                        <Portal>
                            <ColorPicker.Positioner>
                                <ColorPicker.Content bg={'gray.500'}>
                                    <ColorPicker.Area />
                                    <HStack>
                                        <ColorPicker.EyeDropper size="xs" variant="subtle" color="black"/>
                                        <ColorPicker.Sliders />
                                    </HStack>
                                    </ColorPicker.Content>
                            </ColorPicker.Positioner>
                        </Portal>
                    </ColorPicker.Root>
                </Box>

                <Box width="100%" height="240px" bg={{ base: "green.500", _dark: "green.700"}} borderRadius="md" boxShadow="lg" display="flex-column" alignItems="center" justifyContent="center" p={4} mb={2}>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mb={1} textAlign={'center'}>Font Size</Text>
                    <Slider.Root defaultValue={[30]} mb={2}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mt={3} mb={2} textAlign={'center'}>Font Weight</Text>
                    <Slider.Root defaultValue={[30]} mb={3}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mt={2} mb={2} textAlign={'center'}>Font Family</Text>
                    <NativeSelect.Root width="240px" size="md">
                        <NativeSelect.Field
                            color={{ base: 'black', _dark: 'white' }}
                            bg={{ base: 'purple.300', _dark: 'purple.700' }}
                            fontWeight={"bold"}
                            fontSize={"md"}
                            borderRadius={"md"}
                            borderWidth={2}
                            borderColor={{ base: "white", _dark: "black" }}
                            boxShadow={'md'}
                            value={selectedFont.label}
                            onChange={(e) => {
                                const font = fontOptions.find((f) => f.label === e.target.value);
                                if (font) setFont(font);
                            }}
                            >
                            {fontOptions.map((font) => (
                                <option key={font.label} value={font.label}>
                                    {font.label}
                                </option>
                            ))}
                        </NativeSelect.Field>
                    </NativeSelect.Root>
                </Box>

                <Box width="100%" height="153px" bg={{ base: "green.500", _dark: "green.700"}} borderRadius="md" boxShadow="lg" display="flex-column" alignItems="center" justifyContent="center" p={4} mb={2}>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mb={1} textAlign={'center'}>Border Width</Text>
                    <Slider.Root defaultValue={[30]} mb={2}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mt={3} mb={2} textAlign={'center'}>Border Radius</Text>
                    <Slider.Root defaultValue={[30]} mb={3}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                </Box>

                <Box width="100%" height="153px" bg={{ base: "green.500", _dark: "green.700"}} borderRadius="md" boxShadow="lg" display="flex-column" alignItems="center" justifyContent="center" p={4} mb={2}>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mb={1} textAlign={'center'}>Margin</Text>
                    <Slider.Root defaultValue={[30]} mb={2}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                    <Text fontSize="lg" fontWeight="bold"  color={{ base: 'black', _dark: 'white' }} mt={3} mb={2} textAlign={'center'}>Padding</Text>
                    <Slider.Root defaultValue={[30]} mb={3}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                </Box>
            </VStack>
        </Box>
    )
};