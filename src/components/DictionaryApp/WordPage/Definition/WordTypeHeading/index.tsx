import * as React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";

type WordTypedHeadingProps = {
  partOfSpeech: string;
};

export function WordTypedHeading({ partOfSpeech }: WordTypedHeadingProps) {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      h="29px"
      marginBottom="40px"
      marginTop="40px"
    >
      <Text fontSize="24px" fontWeight="700" marginRight="20px">
        {partOfSpeech}
      </Text>
      <Divider borderColor="#979797" />
    </Box>
  );
}
