import { Box, VStack, Text, ColorPicker, Portal, HStack, parseColor, Slider, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { LuArrowRightLeft } from 'react-icons/lu';

export default function ToolTray() {
    const [value, setValue] = useState(parseColor('#34ff98'));

    return (
        <Box position="fixed" right={0} top="90px" width="300px" height="100vh" bg="gray.300" p={4} borderRadius="lg">
            <VStack gap={2}>
                <Text fontSize="2xl" fontWeight="bold" color="green.600" mb={2}>Tool Tray</Text>
                <Box width="100%" height="110px" bg="green.500" borderRadius="md" boxShadow="lg" display="flex-column" alignItems="center" justifyContent="center" p={4} mb={3}>
                    <ColorPicker.Root
                        defaultValue={value}
                        onValueChangeEnd={(e) => setValue(e.value)}
                    >
                        <ColorPicker.HiddenInput />
                        <ColorPicker.Label fontSize={'lg'} fontWeight={'bold'} color={'black'} textAlign={'center'}>
                            Color Picker
                        </ColorPicker.Label>
                        <ColorPicker.Control>
                            <ColorPicker.Input fontSize={'lg'} fontWeight={'semibold'} borderColor={'black'} color={'black'} />
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

                <Box width="100%" height="210px" bg="green.500" borderRadius="md" boxShadow="lg" display="flex-column" alignItems="center" justifyContent="center" p={4} mb={3}>
                    <Text fontSize="lg" fontWeight="bold" color="black" mb={1} textAlign={'center'}>Font Size</Text>
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
                    <Text fontSize="lg" fontWeight="bold" color="black" mt={2} textAlign={'center'}>Font Weight</Text>
                    <Slider.Root defaultValue={[30]} mt={2}>
                    <Slider.Control>
                        <Slider.Track bg="red.100">
                            <Slider.Range bg="tomato" />
                        </Slider.Track>
                        <Slider.Thumb index={0} boxSize={6} borderColor="tomato" shadow="md">
                            <Box color="tomato" as={LuArrowRightLeft} />
                        </Slider.Thumb>
                    </Slider.Control>
                    </Slider.Root>
                    <Text fontSize="lg" fontWeight="bold" color="black" mt={2} textAlign={'center'}>Font Family</Text>
                </Box>

                <Button size={'lg'} colorPalette={'red'}>Reset</Button>
            </VStack>
        </Box>
    )
};