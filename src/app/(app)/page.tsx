import { cookies } from 'next/headers';

type MainPageProps = {};

const MainPage = async ({}: MainPageProps) => {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token')?.value;

  console.log(token);
  return <div>MainPage</div>;
};

export default MainPage;
