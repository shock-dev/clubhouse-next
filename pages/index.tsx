import React, { useState } from 'react';
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

type User = {
  _id: string
  fullname: string
  avatarUrl: string
  isActive: number
  username: string
  phone: string
}

type MainContextProps = {
  onNextStep: () => void;
  step: number;
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
  setFieldValue: (field: keyof User, val: string) => void;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

const Home = () => {
  const [step, setStep] = React.useState(0);
  const [userData, setUserData] = useState<User>();
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const setFieldValue = (field: string, val: string) => {
    setUserData((prev) => {
      return {
        ...prev,
        [field]: val
      };
    });
  };

  console.log(userData);

  return (
    <MainContext.Provider value={{ step, onNextStep, userData, setUserData, setFieldValue }}>
      <Step />
    </MainContext.Provider>
  );
};

export default Home;
