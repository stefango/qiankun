import { useMemo } from 'react';
import { Outlet, useAppData } from '@umijs/max';

export default () => {
  const appData = useAppData();
  const { clientRoutes } = appData;
  console.log(`xzl  appData`, appData);

  return useMemo(() => {
    return <div>
      <h2>WRAPPERS</h2>
      <Outlet/>
    </div>;
  }, []);
};
