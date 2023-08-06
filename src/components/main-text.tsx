import { Box, Text, VStack } from "@chakra-ui/react";

interface Props {
  mainText: string[];
}

const MainText = (props: Props) => {
  return (
    <>
      <Box display={"flex"}>
        <VStack>
          <Box>
            <Text>{props.mainText[0]}</Text>
            <Text>{props.mainText[1]}</Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};
export default MainText;
