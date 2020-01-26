import React from 'react';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Talent, TalentActivation } from 'generated/graphql';
import { TalentsTable } from './TalentsTable';

export default {
  title: 'Talent/TalentsTable',
  component: TalentsTable,
  decorators: [
    (story: any) => (
      <MobileDisplay>
        <div style={{ background: 'black' }}>
          {story()}
        </div>
      </MobileDisplay>
    ),
  ]
};

const talents: Talent[] = [
  {
      "id": 18,
      "name": "Codebreaker",
      "description": "The character removes Setback Dice (Black Dice) from any attempt to break codes or decrypt communications equal to his ranks in Codebreaker. In addition, the character decreases the difficulty of Computers or Intellect checks made to break codes or decrypt communications by one. This does not increase with additional racks of Codebreaker.",
      "ranked": true,
      "activation": TalentActivation.Passive,
      "force": false,
      "specializations": [],
  },
  {
      "id": 61,
      "name": "Grit",
      "description": "Each rank of Grit increases a character’s strain threshold by one.",
      "ranked": true,
      "activation": TalentActivation.Passive,
      "force": false,
      "specializations": [],
  },
  {
      "id": 15,
      "name": "Bypass Security",
      "description": "Remove Setback Dice (Black Dice) eqal to the character’s ranks in Bypass Security from Skulduggery or Computers skill checks made to disable a security device or open a locked door.",
      "ranked": true,
      "activation": TalentActivation.Passive,
      "force": false,
      "specializations": [],
  },
  {
    "id": 15,
    "name": "Bypass Security",
    "description": "Remove Setback Dice (Black Dice) eqal to the character’s ranks in Bypass Security from Skulduggery or Computers skill checks made to disable a security device or open a locked door.",
    "ranked": true,
    "activation": TalentActivation.Passive,
    "force": false,
    "specializations": [],
  },
  {
    "id": 110,
    "name": "Natural Programmer",
    "description": "Once per game session, the character may reroll any one Computer or Astrogation check.",
    "ranked": false,
    "activation": TalentActivation.Passive,
    "force": false,
    "specializations": [],
  }
]

export const Default = () => (
  <TalentsTable talents={talents} />
);