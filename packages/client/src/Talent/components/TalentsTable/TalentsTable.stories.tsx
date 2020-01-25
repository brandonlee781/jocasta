import React from 'react';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { TalentsTable } from './TalentsTable';

export default {
  title: 'TalentsTable',
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
}

export const Default = () => (
  <TalentsTable />
);