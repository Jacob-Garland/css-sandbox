import { Box } from '@chakra-ui/react';
import { BulmaCoffee } from './frameworks/BulmaCoffee';
import { BootstrapCoffee } from './frameworks/BootstrapCoffee';
import { ChakraCoffee } from './frameworks/ChakraCoffee';
import { TailwindCoffee } from './frameworks/TailwindCoffee';
import { useFrameworkStore } from '../state/useFrameworkStore';

export default function BrowserWindow() {
    const { currentFramework } = useFrameworkStore();
    const renderFramework = () => {
        switch (currentFramework) {
            case 'bulma':
                return <BulmaCoffee />;
            case 'bootstrap':
                return <BootstrapCoffee />;
            case 'tailwind':
                return <TailwindCoffee />;
            default:
                return <ChakraCoffee />;
        }
    };

    return (
        <Box position="fixed" top={28} left={4} right={64} bottom={0} bg={{ base: "gray.200", _dark: "gray.600"}} boxShadow={"lg"} borderRadius={"xl"} borderColor={{ base: 'white', _dark: 'black'}} borderWidth={3} p={7}>
            <Box width="96%" height="100%" bg={{ base: "gray.100", _dark: "gray.700"}} borderRadius={"xl"} boxShadow={"lg"} display="flex" flexDirection="column" alignItems="center">
                <Box maxHeight="800px" overflowY={'auto'} p={4}>
                    {renderFramework()}
                </Box>
            </Box>
        </Box>
    );
};