import React from 'react';
import { withKnobs, number } from "@storybook/addon-knobs";
import { MobileDisplay } from 'App/stories/MobileDisplay';
import { DiceDisplay } from './DiceDisplay';

export default {
  title: 'Dice/DiceDisplay',
  component: DiceDisplay,
  decorators: [withKnobs],
}

export const Default = () => {

  return (
    <MobileDisplay>
      <DiceDisplay
        ability={number('Ability Dice', 2)}
        boost={number('Boost Dice', 3)}
        challenge={number('Challenge Dice', 1)}
        difficulty={number('Difficulty Dice', 4)}
        force={number('Force Dice', 0)}
        proficiency={number('Proficiency Dice', 1)}
        setback={number('Setback Dice', 0)}
      />
    </MobileDisplay>
  );
};

export const Wrapping = () => (
  <MobileDisplay>
    <DiceDisplay
      boost={25}
    />
  </MobileDisplay>
);