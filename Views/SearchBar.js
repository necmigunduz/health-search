import React, { Component } from "react";
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
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationActions } from 'react-navigation';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      count: '5'
    }
  }
  render() {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="2">
          <VStack
            space={5}
            width="100%"
            divider={
              <Box px="2">
                <Divider />
              </Box>
            }
          >
            <VStack width="100%" space={5} alignItems="center">
              <Heading fontSize="lg">Search for a patient</Heading>
              <Input
                placeholder="Search for a patient"
                value = { q }
                bg="#fff"
                width="100%"
                borderRadius="4"
                py="3"
                px="1"
                fontSize="14"
                _web={{
                  _focus: {
                    borderColor: "muted.300",
                    style: { boxShadow: "none" },
                  },
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
              />
            </VStack>
          </VStack>
        </Center>
      </NativeBaseProvider>
    );
  }
}
