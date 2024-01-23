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

  return (
    <div className="h-[89%]">
      <CustomHeader
        name={user.name}
        email={user.email}
        profilePicture={user.avatar}
        buttonTitle="Edit Profile"
        href="/profil"
      />
    </div>
  );
};

export default ProfilePage;
