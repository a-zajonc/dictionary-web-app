import * as React from "react";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { SearchInput } from "./SearchInput";
import { FontContext } from "../../context";
import { ContentRender } from "./ContentRender";

export function DictionaryApp() {
  const [font, setFont] = React.useState("Inter");

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <Box
        w={{
          base: "360px",
          xs: "400px",
          sm: "500px",
          lg: "737px",
        }}
        fontFamily={font}
      >
        <NavBar />
        <SearchInput />
        <ContentRender />
      </Box>
    </FontContext.Provider>
  );
}
