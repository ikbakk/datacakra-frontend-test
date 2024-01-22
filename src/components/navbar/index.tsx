import { serverComponentSupabaseClient } from '@/lib/supabaseClient/server';
import Breadcrumb from './Breadcrumb';
import NameDisplay from './NameDisplay';
import { Button } from '../ui/button';
import LogoutButton from './LogoutButton';

const Navbar = async () => {
  const { data } = await serverComponentSupabaseClient.auth.getUser();
  return (
    <header className="flex w-full items-center justify-between gap-4 p-4">
      <Breadcrumb />
      <section className="flex w-full items-center justify-end gap-8">
        <NameDisplay name={data.user?.user_metadata.name} />
        <LogoutButton />
      </section>
    </header>
  );
};

export default Navbar;
