import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Input,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useClipboard,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { HeartOutlined, HeartFilled, HeartTwoTone } from '@ant-design/icons';
import { Reorder } from 'framer-motion';

function ScreenTest() {
  const [emojis, setEmojis] = useState([
    '🎈 Balloon',
    '🎁 Gift',
    '🎃 Pumpkin',
    '👓 Shades',
  ]);

  const [clipboardValue, setClipboardValue] = useState(
    'Press the Button to Copy Me!'
  );
  const { hasCopied, onCopy } = useClipboard(clipboardValue);

  return (
    <Container maxW='container.xl' centerContent>
      <Heading as='h1' color='testYellow' my={4} textDecoration='underline'>
        Test Page
      </Heading>

      <Text color='white' textAlign='center' fontSize={'1.5rem'}>
        Practice stuff here! Chakra, Framer animations, etc
      </Text>

      <Box my={8}>
        <Heading as='h3' color='testYellow' my={4}>
          Testing Chakra Buttons!
        </Heading>
        <Wrap justify='center'>
          <Button colorScheme='pink'>Practice Button!</Button>
          <Button colorScheme='facebook'>Facebook</Button>
        </Wrap>
      </Box>

      <Box my={8}>
        <Heading as='h3' color='testYellow' my={4}>
          Testing Ant Icons
        </Heading>
        <Wrap justify='center'>
          <HeartOutlined style={{ fontSize: '3rem' }} />
          <HeartFilled style={{ fontSize: '3rem' }} rotate={45} />
          <HeartTwoTone twoToneColor='red' style={{ fontSize: '3rem' }} spin />
        </Wrap>
      </Box>

      <Box my={8}>
        <Heading color='testYellow' my={4}>
          Drag and Drop Us -- Horizontally!
        </Heading>
        <Reorder.Group axis='x' values={emojis} onReorder={setEmojis}>
          <Wrap justify='center' spacing={8}>
            {emojis.map((item) => (
              <Reorder.Item key={item} value={item}>
                <span style={{ cursor: 'pointer' }}>{item}</span>
              </Reorder.Item>
            ))}
          </Wrap>
        </Reorder.Group>
      </Box>

      <Box my={8}>
        <Heading as='h3' color='testYellow' my={4}>
          Testing Skeleton
        </Heading>
        <Wrap>
          <SkeletonCircle
            size='10'
            startColor='pink.500'
            endColor='orange.500'
          />
          <Skeleton isLoaded={false}>
            <Text>You can't read this until I'm loaded!</Text>
          </Skeleton>
        </Wrap>
        <SkeletonText mt={4} noOfLines={4} spacing={3} />
      </Box>

      <Box my={8}>
        <Heading as='h3' color='testYellow' my={4}>
          Testing useClipboard Hook!
        </Heading>
        <Flex mb={2}>
          <Input value={clipboardValue} isReadOnly placeholder='Welcome' />
          <Button colorScheme='pink' onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <Editable placeholder='Paste here'>
          <EditablePreview width='100%' />
          <EditableInput />
        </Editable>
      </Box>

      <Box my={8}>
        <Heading as='h3' color='pink' my={4}>
          Questions
        </Heading>
        <ul>
          <li>What is the Chakra way to give an element a cursor pointer?</li>
        </ul>
      </Box>
    </Container>
  );
}

export default ScreenTest;
