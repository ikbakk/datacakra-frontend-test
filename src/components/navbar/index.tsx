import Breadcrumb from './Breadcrumb';
import NameDisplay from './NameDisplay';
import LogoutButton from './LogoutButton';
import { getToken } from '@/lib/cookieCheck';
import { getJwtPayload } from '@/lib/jwtHelper';

const Navbar = async () => {
  const token = getToken();
  const jwtPayload = getJwtPayload(token!);

  return (
    <header className="flex w-full items-center justify-between gap-4 p-4">
      <Breadcrumb />
      <section className="flex w-full items-center justify-end gap-8">
        <NameDisplay name={jwtPayload?.name ?? 'User'} />
        <LogoutButton />
      </section>
    </header>
  );
};

export default Navbar;
