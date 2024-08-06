'use server';

import { auth } from "@/auth";
import { Avatar, Badge, Box, Button,Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue } from '@chakra-ui/react';

import {FaStar} from 'react-icons/fa'
export async function Profile() {
    const session = await auth();
    let id: string | undefined;
    if (session?.user) {
        console.log();
        id = session.user.id;
    }
    //fetch record from supabase using id


    return (
        <main className="max-w-screen-lg h-screen mx-4 lg:mx-auto bg-purple-500">
            <nav className="w-full h-20 bg-blue-700">

            </nav>

            <Box
                className="w-5/6 mx-auto my-2 p-4 lg:w-3/4 lg:mx-auto bg-zinc-500"
                borderWidth="1px"
                borderRadius="lg"
            >
                <Flex align="center" mb="4">
                    <Avatar
                        size='lg'
                        src="https://bit.ly/dan-abramov"
                        mr="4"
                    />
                    <Box>
                        <Text fontWeight="bold" fontSize='medium'>
                            Melinda Paul
                            <Badge ml="2" colorScheme="green">
                                @meldesigner
                            </Badge>
                        </Text>
                        <Text fontSize='medium'>
                            Graphic Designer and WordPress Expert
                        </Text>
                    </Box>
                </Flex>

                <Flex align="center" mb="4">
                    <FaStar color="yellow" size='30' />
                    <Text ml="2" mr="2" fontWeight="bold">
                        5
                    </Text>
                    <Text>(84)</Text>
                    <Text ml="4" fontWeight="bold">
                        $2.5k earned
                    </Text>
                    <Text ml="4">Dubai, UAE</Text>
                </Flex>

                <Text mb="4">
                    Hi, I am a professional Graphic Designer and Web Developer. I am a member of Evolving team [login to view URL] and I have experience of 5+ years even before...
                </Text>
            </Box>

            <Box>

            </Box>
        </main>
    )
}