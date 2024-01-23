import AddNewTouristForm from '@/components/turis/addForm';
import { getToken } from '@/lib/cookieCheck';

const AddTouristPage = () => {
  const token = getToken();

  return (
    <div className="flex rounded-lg bg-card p-4 shadow-md">
      <AddNewTouristForm token={token!} />
    </div>
  );
};

export default AddTouristPage;
