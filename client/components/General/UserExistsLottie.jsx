import Lottie from "lottie-react";
import animationData from "/public/Lotties/email-exists.json";

export default function UserExistsLottie({height}) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
        style={{height: height}}
      />
    </div>
  );
}