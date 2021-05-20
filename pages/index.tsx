import React from 'react';
import { EnterNameStep } from '../components/steps/EnterNameStep';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep';
import { TwitterStep } from '../components/steps/TwitterStep';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { EnterCodeStep } from '../components/steps/EnterCodeStep';

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
};


const Home = () => {
  const Current = stepsComponents[0];

  return (
    <div>
      <Current />
    </div>
  );
};

export default Home;
