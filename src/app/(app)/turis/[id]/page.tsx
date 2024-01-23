import CustomHeader from '@/components/CustomHeader';
import TurisDetailCard from '@/components/turis/detail/TurisDetailCard';
import { getToken } from '@/lib/cookieCheck';
import { Tourist } from '@/lib/types/tourist';

type TouristDetailPageType = {
  params: {
    id: string;
  };
};

type CustomListElementType = {
  title: string;
  info: string;
};

const CustomListElement = ({ title, info }: CustomListElementType) => {
  return (
    <li>
      <span className="mr-2 font-semibold">{title}:</span> {info}
    </li>
  );
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

  const details = [
    {
      title: 'Nama Lengkap',
      info: tourist.tourist_name,
    },
    {
      title: 'Email',
      info: tourist.tourist_email,
    },
    {
      title: 'No. Hp',
      info: '08123456790',
    },
    {
      title: 'Lokasi',
      info: tourist.tourist_location,
    },
  ];

  return (
    <div className="h-[89%]">
      <CustomHeader
        buttonTitle="Edit Info Turis"
        email={tourist.tourist_email}
        name={tourist.tourist_name}
        profilePicture={tourist.tourist_profilepicture}
      />
      <section className="flex w-full justify-between gap-4 lg:mt-20 2xl:mt-24">
        <TurisDetailCard title="Detail Profil">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
            saepe mollitia temporibus. Non neque consectetur
          </p>
          <ul className="flex flex-col gap-2">
            {details.map((detail) => (
              <CustomListElement title={detail.title} info={detail.info} />
            ))}
          </ul>
        </TurisDetailCard>
        <TurisDetailCard title="Jadwal">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cum,
            blanditiis neque ratione cupiditate aut accusamus ad odit ducimus
            necessitatibus possimus? Consectetur, praesentium nobis commodi
            veritatis ducimus beatae.
          </p>
        </TurisDetailCard>
        <TurisDetailCard title="Informasi Selengkapnya">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cum,
            blanditiis neque ratione cupiditate aut accusamus ad odit ducimus
            necessitatibus possimus? Consectetur, praesentium nobis commodi
            veritatis ducimus beatae.
          </p>
        </TurisDetailCard>
      </section>
    </div>
  );
};

export default TurisDetailPage;
