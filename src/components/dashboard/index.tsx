import DashboardCard from './Card';
import { Tourist } from '../../lib/types/tourist';
import { formatDate } from '@/lib/dateFormatter';
import PlaceholderDashboard from './Placeholder';

type DashboardProps = {
  touristsData: Tourist[];
  totalTourists: number;
};

const Dashboard = ({ touristsData, totalTourists }: DashboardProps) => {
  const latestTourist = touristsData[0];
  return (
    <>
      <section className="flex w-full justify-between gap-4">
        <DashboardCard
          icon="List"
          title="Jumlah Turis"
          subtitle={totalTourists}
        />
        <DashboardCard
          icon="MapPin"
          title="Lokasi Turis Terbaru"
          subtitle={latestTourist.tourist_location}
        />
        <DashboardCard
          icon="Calendar"
          title="Tanggal Daftar Terakhir"
          subtitle={formatDate(latestTourist.createdat)}
        />
      </section>
      <section className="flex w-full gap-4">
        <PlaceholderDashboard />
      </section>
    </>
  );
};

export default Dashboard;
