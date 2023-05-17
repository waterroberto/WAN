import SpinnerImage from "../../assets/Spinner.svg";
import Image from "next/image";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        zIndex: 100,
        background: "rgba(0,0,0,1)",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Image
        src={SpinnerImage}
        height={150}
        width={150}
        alt="Loading spinner"
      />
    </div>
  );
};

export default Spinner;
