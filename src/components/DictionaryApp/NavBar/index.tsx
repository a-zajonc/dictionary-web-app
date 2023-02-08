import * as React from "react";
import { Box } from "@chakra-ui/react";
import { FontChange } from "./FontChange";
import { Logo } from "./Logo";
import { ModeChange } from "./ModeChange";

export function NavBar() {
  return (
    <Box display="flex" flexDir="row">
      <Logo />
      <FontChange />
      <ModeChange />
    </Box>
  );
}