import { StepPhoneEmail, Stepotp } from "@/components";
import { StepPhoneEmailProps } from "@/components/steps/StepPhoneEmail";
import Email from "@/components/steps/StepPhoneEmail/Email";
import Phone from "@/components/steps/StepPhoneEmail/Phone";
import React, { useState } from "react";

export type stepsProps = {
  [key: number]: React.FC<StepPhoneEmailProps>;
};

const steps: stepsProps = {
  1: StepPhoneEmail,
  2: Stepotp,
};

const Login = () => {
  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return <Step onNext={onNext} />;
};

export default Login;
