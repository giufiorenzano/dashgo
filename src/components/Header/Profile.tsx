import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean
}
export function Profile({showProfileData}:ProfileProps ) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && <Box mr="4" textAlign="right">
                <Text>Giulia Fiorenzano</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    giufiorenzano@gmail.com
                </Text>
            </Box>}

            <Avatar
                size="md"
                name="Giulia Fiorenzano"
                src="https://github.com/giufiorenzano.png"
            />

        </Flex>
    )
}