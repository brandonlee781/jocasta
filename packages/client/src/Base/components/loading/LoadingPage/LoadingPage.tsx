import React from 'react';
import { PageWrapper } from 'Base/components/PageWrapper';
import { TopNav } from 'Base/components/navigation/TopNav';
import { useToggle } from 'Base/use/useToggle';
import { LoadingSpinner } from '../LoadingSpinner';

interface LoadingPageProps {

}
export const LoadingPage: React.FC<LoadingPageProps> = () => {
  const [nav, setNav] = useToggle(false);
  return (
    <PageWrapper
      open={nav}
      setOpen={setNav}
      topNav={<TopNav />}
    >
      <LoadingSpinner/>
    </PageWrapper>
  );
};
