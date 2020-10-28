import { CircularProgress } from "@material-ui/core";
import Image from "next/image";

const Splash: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <Image className="w-24 h-24" src="/logo.png" alt="Logo" unsized />
      <CircularProgress size="1.5rem" />
    </div>
  );
};

export default Splash;
