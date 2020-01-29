import React from 'react';
import { PageWrapper } from 'App/components/PageWrapper';
import { TopNav } from 'App/components/navigation/TopNav';
import { useToggle } from 'App/use/useToggle';
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
