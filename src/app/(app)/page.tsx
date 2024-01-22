import { serverComponentSupabaseClient } from '@/lib/supabaseClient/server';
import { redirect } from 'next/navigation';

type MainPageProps = {};

const MainPage = async ({}: MainPageProps) => {
  const { data } = await serverComponentSupabaseClient.auth.getSession();

  if (!data.session) {
    redirect('/login');
  }
  return <div>MainPage</div>;
};

export default MainPage;
