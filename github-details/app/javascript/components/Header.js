import React from "react";
import {
  Heading,
  Flex,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

const Header = (props) => (
  (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="linkedin.500"
      color="white"
      mb="5"
      {...props}
    >
      <LinkBox as="article" align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <LinkOverlay href="/">
            Github Details
          </LinkOverlay>
        </Heading>

      </LinkBox>
    </Flex>
  )
);

export default Header;
