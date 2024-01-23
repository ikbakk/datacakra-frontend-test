import { cookies } from 'next/headers';
import { TouristResponse } from '../../lib/types/tourist';
import Dashboard from '@/components/dashboard';

type MainPageProps = {};

const MainPage = async ({}: MainPageProps) => {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token')?.value;
  const touristsReq = await fetch(`${process.env.BASEURL}/api/Tourist?page=1`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  const tourists = (await touristsReq.json()) as TouristResponse;

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <Dashboard
        touristsData={tourists.data}
        totalTourists={tourists.totalrecord}
      />
    </div>
  );
};

export default MainPage;
