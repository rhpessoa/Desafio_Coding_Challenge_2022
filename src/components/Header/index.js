import { HeaderContain } from "./styles";
import Image from "next/image";
import Search from "./Search";
import YoutubeLogo from "../../../public/Logo.png"
export default function Header() {
  return (
    <HeaderContain>
      <Image
        width={131}
        height={55}
        alt="Youtube"
        src={YoutubeLogo}
      />
      <Search />
    </HeaderContain>
  );
}
