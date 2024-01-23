import CustomHeader from '@/components/CustomHeader';
import { getToken } from '@/lib/cookieCheck';
import { CustomJwtPayload } from '@/lib/types/auth';
import { User } from '@/lib/types/user';
import { decode } from 'jsonwebtoken';

type ProfilePageProps = {};

const ProfilePage = async ({}: ProfilePageProps) => {
  const token = getToken();
  const payload = decode(token!) as CustomJwtPayload;
  const userId = payload.id;
  const userReq = await fetch(`${process.env.BASEURL}/api/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  const user = (await userReq.json()) as User;

  console.log(user);
  return (
    <div className="h-[89%]">
      <CustomHeader
        name={user.name}
        email={user.email}
        profilePicture={user.avatar}
        buttonTitle="Edit Profile"
      />
      <section className="flex w-full justify-between gap-4 lg:mt-20 2xl:mt-24">
        <div className="flex w-full flex-col gap-4">Profile</div>
        <div className="flex w-full flex-col gap-4">Profile</div>
      </section>
    </div>
  );
};

export default ProfilePage;
