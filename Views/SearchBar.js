import React from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function SearchBar() {
  return (
    <VStack
      space={5}
      width="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>

      <VStack width="100%" space={5} alignItems="center">
        <Heading fontSize="lg">Search for a patient</Heading>
        <Input
          placeholder="Search for a patient"
          bg="#fff"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        //   InputRightElement={
        //     <Icon
        //       m="2"
        //       mr="3"
        //       size="6"
        //       color="gray.400"
        //       as={<MaterialIcons name="mic" />}
        //     />
        //   }
        />
      </VStack>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="2">
        <SearchBar/>
      </Center>
    </NativeBaseProvider>
  );
}


