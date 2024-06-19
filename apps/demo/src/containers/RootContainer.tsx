import { Outlet } from 'react-router-dom';
import { withAuth } from '../withAuth';

const RootContainer: React.FC = () => {
  return <Outlet />;
};

export default withAuth(RootContainer);
