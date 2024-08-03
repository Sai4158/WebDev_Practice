import Image from "next/image";
import UserData from "./UserData/UserData";

export default function Home() {
  return (
    <h1>
      <UserData />
    </h1>
  );
}
