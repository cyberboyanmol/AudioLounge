import { StepEmail, StepOtp } from "@/components";
import SetupLayout from "@/components/Layouts/Setup";
import GuestRoute from "@/components/RouteProtector/GuestRoute";
import { StepProps } from "@/components/Steps/Steps";

import React, { useState } from "react";

export type loginStepsProps = {
  [key: number]: React.FC<StepProps>;
};

const steps: loginStepsProps = {
  1: StepEmail,
  2: StepOtp,
};

const Login = () => {
  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }
  function onPrevious() {
    setStep(step - 1);
  }
  return (
    <SetupLayout>
      <Step onNext={onNext} onPrevious={onPrevious} />
    </SetupLayout>
  );
};

export default GuestRoute(Login);
