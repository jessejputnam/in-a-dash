import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export default function refreshData(
  router: NextRouter,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): void {
  router.replace(router.asPath);
  setIsLoading(true);
}
