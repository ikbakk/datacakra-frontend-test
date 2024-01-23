import Icon from '../Icon';
import { icons } from 'lucide-react';

type DashboardCardProps = {
  icon: keyof typeof icons;
  title: string;
  subtitle: string | number;
};

const DashboardCard = ({ icon, title, subtitle }: DashboardCardProps) => {
  return (
    <div className="flex w-1/3 items-center justify-between rounded-lg bg-card p-4 capitalize shadow-md">
      <div>
        <h3 className="font-semibold text-card-foreground/70">{title}</h3>
        <h2 className="text-xl font-bold text-card-foreground">{subtitle}</h2>
      </div>
      <div className="rounded-lg bg-card-foreground p-2 text-card">
        <Icon name={icon} size={28} />
      </div>
    </div>
  );
};

export default DashboardCard;
