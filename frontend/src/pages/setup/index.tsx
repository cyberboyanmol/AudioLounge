import SemiProtectedRoute from "@/components/RouteProtector/SemiProtected";
import StepAvatar from "@/components/steps/StepAvatar";
import StepName from "@/components/steps/StepName";
import { StepProps } from "@/components/steps/StepPhoneEmail";
import { NextPage } from "next";
import React, { useState } from "react";

export type loginStepsProps = {
  [key: number]: React.FC<StepProps>;
};

const steps: loginStepsProps = {
  1: StepName,
  2: StepAvatar,
};
const SetupProfile: NextPage = () => {
  const [step, setStep] = useState<number>(1);
  const Component = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  function onPrevious() {
    setStep(step - 1);
  }
  return (
    <div className="cardWrapper">
      <Component onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};

export default SemiProtectedRoute(SetupProfile);
