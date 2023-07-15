import SetupLayout from "@/components/layouts/setupLayout";
import { StepEmail } from "@/components/steps";
import { StepProps } from "@/types";
import React, { useState } from "react";

export type loginStepsProps = {
  [key: number]: React.FC<StepProps>;
};

const steps: loginStepsProps = {
  1: StepEmail,
  //   2: Stepotp,
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

export default Login;
