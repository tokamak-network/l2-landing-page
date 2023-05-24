"use client";
import { useMediaQuery } from "@chakra-ui/react";

const useMediaView = (viewPort?: number) => {
  const [bigPcView] = useMediaQuery("(min-width: 1441px)");
  const [pcView] = useMediaQuery("(max-width: 1440px)");
  const [tableView] = useMediaQuery("(max-width: 1024px)");
  const [mobileView] = useMediaQuery("(max-width: 699px)");
  const [bp500px] = useMediaQuery("(max-width: 500px)");
  const [bp1024px] = useMediaQuery("(max-width: 1024px)");

  const [customMaxView] = useMediaQuery(`"(max-width: ${viewPort}px)"`);

  return {
    bigPcView,
    pcView,
    tableView,
    mobileView,
    bp500px,
    bp1024px,
    customMaxView,
  };
};

export default useMediaView;
