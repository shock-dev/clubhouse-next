import React from 'react';
import { EnterNameStep } from '../components/steps/EnterNameStep';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep';
import { GithubStep } from '../components/steps/GithubStep';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { EnterCodeStep } from '../components/steps/EnterCodeStep';

const stepsComponents = {
  0: WelcomeStep,
  1: GithubStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
};

type MainContextProps = {
  onNextStep: () => void;
  step: number;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

const Home = () => {
  const [step, setStep] = React.useState(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
};

export default Home;
