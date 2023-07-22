import React, { useState } from "react";
import SetupLayout from "@/components/Layouts/Setup";
import { StepAvatar, StepName } from "@/components";
import { StepProps } from "@/components/Steps/Steps";

export type loginStepsProps = {
  [key: number]: React.FC<StepProps>;
};

const steps: loginStepsProps = {
  1: StepName,
  2: StepAvatar,
};

const Setup = () => {
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

export default Setup;
