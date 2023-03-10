import * as React from "react";
import {
  Box,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import arrowDown from "../../../../images/icon-arrow-down.svg";
import { FontContext } from "../../../../context";

function menuHeader(font: string) {
  switch (font) {
    case "Inter":
      return " Sans Serif";
    case "Lora":
      return "Serif";
    case "Inconsolata":
      return "Mono";
  }
}

export function FontChange() {
  const { font, setFont } = React.useContext(FontContext);

  return (
    <Box w="120px" h="24px" marginRight="20px" textAlign="right">
      <Menu>
        <MenuButton>
          <Box
            display="flex"
            flexDir="row"
            w="100%"
            fontFamily={font}
            fontWeight="700"
            fontSize="18px"
          >
            {menuHeader(font)}
            <Img src={arrowDown} alt="Arrow down" marginLeft="8px" />
          </Box>
        </MenuButton>
        <MenuList paddingBlock="30px" paddingLeft="30px">
          <Box
            w="100%"
            h="104px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <MenuItem fontFamily="Inter" onClick={() => setFont("Inter")}>
              Sans Serif
            </MenuItem>
            <MenuItem fontFamily="Lora" onClick={() => setFont("Lora")}>
              Serif
            </MenuItem>
            <MenuItem
              fontFamily="Inconsolata"
              onClick={() => setFont("Inconsolata")}
            >
              Mono
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}
