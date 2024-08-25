import { useMemo } from "react";

const useNumberFormatter = (number:number) => {
  const formattedNumber = useMemo(() => {
    if (number >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "b";
    }
    if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m";
    }
    if (number >= 1_000) {
      return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return number.toString();
  }, [number]);

  return formattedNumber;
};

export default useNumberFormatter;
