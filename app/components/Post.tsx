"use client";
import {
  Button,
  Card,
  Heading,
  Image,
  Text,
  Stack,
  CardBody,
  CardFooter,
  HStack,
  Tag,
} from '@chakra-ui/react'
import React from 'react'
import { FaHeadphones,FaShareAlt } from 'react-icons/fa';
import {BiDownvote,BiSolidLowVision,BiUpvote,BiSolidUpvote} from 'react-icons/bi'
import { CiBookmark } from "react-icons/ci";
import { useAudioStore } from '../store/AudioStore';
import Link from 'next/link';

interface post {
  title: string,
  id: string,
  tags: string[]
}

function Post(props: post) {
  const { id, title, tags } = props
  const {currentSrc,setsrc} = useAudioStore();

  const handleClick = () => {
    console.log(currentSrc);
    setsrc(title);
  }
  
  return (

    <Card maxW='xl' margin="auto" marginBottom="5" backgroundColor="white">
      <CardBody>
        <Stack mt='4' spacing='3'>
          <Link href="/" className='hover:text-blue-600'>
            Username
          </Link>
          <Heading size='md'>{title}</Heading>
          <Text className='text-ellipsis'>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <HStack spacing={4} className='flex flex-wrap'>
            {tags.map(t => (
              <Tag size="xl" padding='2' bg="beige">
                <Text size="sm">
                  {t}
                </Text>
              </Tag>
            ))}
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter display="flex" flexDirection="row" gap={5}>
        <Button onClick={handleClick} width="fit-content" leftIcon={<FaHeadphones/>}>
          Listen
        </Button>
        <HStack spacing={4}>
            <BiUpvote size="25" color='gray'/>
            <BiDownvote size="25" color='gray'/>
            <CiBookmark size="25" color='gray'/>
            <FaShareAlt size="25" />
        </HStack>
      </CardFooter>
    </Card>

  );

}

export default Post