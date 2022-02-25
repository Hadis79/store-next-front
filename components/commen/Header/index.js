import Image from "next/image";
import Logo from "../../../assets/image/hulu-white.png";
import {
  HomeOutline,
  LightningBoltOutline,
  BadgeCheckOutline,
  CollectionOutline,
  Search,
  UserOutline,
} from "heroicons-react";
import HeaderItems from "./HeaderItems";

const Header = () => {
  const IconArray = [
    { name: <HomeOutline />, label: "Home", id: 1 },
    { name: <LightningBoltOutline />, label: "TRENDING", id: 2 },
    { name: <BadgeCheckOutline />, label: "VERIFIED", id: 3 },
    { name: <CollectionOutline />, label: "COLLECTIONS", id: 4 },
    { name: <Search />, label: "SEARCH", id: 5 },
    { name: <UserOutline />, label: "ACCOUNT", id: 6 },
  ];
  console.log(IconArray);
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between  h-auto items-center">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        <HeaderItems IconArray={IconArray}/>
      </div>
      <Image width={200} height={100} src={Logo} alt="logo image" />
    </header>
  );
};

export default Header;
