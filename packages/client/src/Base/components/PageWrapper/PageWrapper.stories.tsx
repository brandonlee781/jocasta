import React from 'react';
import { withRouter } from 'Base/stories/withRouter';
import { Typography } from '@material-ui/core';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { useToggle } from 'Base/use/useToggle';
import { PageWrapper } from './PageWrapper';

export default {
  title: 'Base/PageWrapper',
  component: PageWrapper,
  decorators: [
    withRouter,
    (story: any) => (<MobileDisplay>{story()}</MobileDisplay>),
  ],
}

export const Default = () => {
  const [open, setOpen] = useToggle(false);
  return (<PageWrapper open={open} setOpen={setOpen} />);
};

export const StartsOpen = () => {
  const [open, setOpen] = useToggle(true);
  return (<PageWrapper open={open} setOpen={setOpen}/>);
};

const TopNav: React.FC = () => (
  <div style={{ color: 'white', textAlign: 'center', border: '1px solid white' }}>
    This is a top nav
  </div>
);
export const WithContent = () => {
  const [open, setOpen] = useToggle(false);
  return (
    <PageWrapper topNav={<TopNav/>} open={open} setOpen={setOpen} >
      <Typography variant="h4" color="textSecondary" align="center">
        Title
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est sem. Aliquam porttitor ut dui in dictum. Vestibulum aliquet iaculis lorem ac egestas. In hac habitasse platea dictumst. In eget nibh ornare nisl tempus eleifend. Cras vestibulum sem quis risus rutrum, nec cursus leo ornare. Phasellus scelerisque faucibus vehicula. Mauris vitae felis vel nisl congue vestibulum sed vitae ex. In eu erat et ex tincidunt blandit. Ut eget justo vel tortor lacinia venenatis vitae vitae purus. Quisque bibendum justo quam, nec faucibus leo tincidunt vitae. Suspendisse malesuada tempus nisi, eget tincidunt sapien ullamcorper vel. Aenean tincidunt nibh vel nulla porta, sed mollis neque luctus.

        Nulla ut posuere turpis, a luctus erat. Sed auctor efficitur nulla, id cursus nisi tristique sed. Pellentesque maximus est a dui egestas, eu vestibulum erat tempus. Nullam pulvinar a lacus vitae imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In porttitor aliquam elit sed ultricies. Cras efficitur non nibh at auctor. Aliquam lobortis, orci at porta vehicula, mauris dui dignissim tellus, ac ultricies erat arcu nec purus. Mauris volutpat elementum eleifend. Praesent porta suscipit ex id venenatis. In hac habitasse platea dictumst. Phasellus commodo turpis in lacus volutpat, vitae mattis odio faucibus. Integer iaculis iaculis velit. Nam mi erat, consequat ut pellentesque in, maximus in tellus. Nulla eu dignissim ante. Fusce porta tristique imperdiet.

        Morbi ultrices diam non dolor ullamcorper, et interdum ligula luctus. In hac habitasse platea dictumst. Nam in sem finibus, dignissim ex vitae, tincidunt ante. Nullam lobortis sollicitudin massa, sed tempor ipsum fermentum eget. Integer viverra sollicitudin purus non interdum. Maecenas ornare mi sit amet faucibus sagittis. Nullam et mauris at ipsum rhoncus porttitor et vitae diam. Etiam accumsan finibus sapien sed lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu est dui. Mauris magna metus, interdum sed lobortis eu, aliquam sit amet ipsum.
      </Typography>
    </PageWrapper>
  );
};
