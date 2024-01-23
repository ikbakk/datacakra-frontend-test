import CustomHeader from '@/components/CustomHeader';
import TouristEditForm from '@/components/turis/detail/editForm';
import { getToken } from '@/lib/cookieCheck';
import { Tourist } from '@/lib/types/tourist';

export const dynamic = 'force-dynamic';

type TouristDetailPageType = {
  params: {
    id: string;
  };
};
const TurisDetailPage = async ({ params }: TouristDetailPageType) => {
  const { id } = params;
  const token = getToken();
  const touristReq = await fetch(`${process.env.BASEURL}/api/Tourist/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  const tourist = (await touristReq.json()) as Tourist;

  return (
    <div className="h-[89%]">
      <CustomHeader
        buttonTitle="Edit Info Turis"
        email={tourist.tourist_email}
        name={tourist.tourist_name}
        profilePicture={tourist.tourist_profilepicture}
        href={`/turis/${id}/?isEditing=true`}
      />
      <section className="mx-auto flex w-1/2 justify-between gap-4 rounded-lg bg-card p-4 shadow-md lg:mt-20 2xl:mt-24">
        <TouristEditForm
          token={token!}
          email={tourist.tourist_email}
          name={tourist.tourist_name}
          location={tourist.tourist_location}
        />
      </section>
    </div>
  );
};

export default TurisDetailPage;
