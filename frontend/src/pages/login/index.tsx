import { StepPhoneEmail, Stepotp } from "@/components";
import { StepProps } from "@/components/steps/StepPhoneEmail";
import Email from "@/components/steps/StepPhoneEmail/Email";
import Phone from "@/components/steps/StepPhoneEmail/Phone";
import React, { useState } from "react";

export type loginStepsProps = {
  [key: number]: React.FC<StepProps>;
};

const steps: loginStepsProps = {
  1: StepPhoneEmail,
  2: Stepotp,
};

const Login = () => {
  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL ,);
  function onNext() {
    setStep(step + 1);
  }
  function onPrevious() {
    setStep(step - 1);
  }

  return <Step onNext={onNext} onPrevious={onPrevious} />;
};

export default Login;
