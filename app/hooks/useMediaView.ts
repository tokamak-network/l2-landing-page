"use client";
import { useMediaQuery } from "@chakra-ui/react";

const useMediaView = (viewPort?: number) => {
  
  const [pcView] = useMediaQuery("(min-width: 1200px)");
  const [tableView] = useMediaQuery("(min-width: 800px)");
  const [mobileView] = useMediaQuery("(max-width: 799px)");

  const [customMaxView] = useMediaQuery(`"(max-width: ${viewPort}px)"`);

  return {
    pcView,
    tableView,
    mobileView,
    customMaxView,
  };
};

export default useMediaView;
