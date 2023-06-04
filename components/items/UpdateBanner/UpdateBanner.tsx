import { UpdateBannerProps } from "@/lib/types";

import Banner from "./Banner";

export default function UpdateBanner({ msg, hidden }: UpdateBannerProps) {
  return (
    <Banner $hidden={hidden} onClick={() => console.log("Hidden: " + hidden)}>
      <p>{msg}</p>
    </Banner>
  );
}
