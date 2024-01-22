import Icon from '../Icon';

type NameDisplayProps = {
  name: string;
};

const NameDisplay = ({ name }: NameDisplayProps) => {
  return (
    <div className="group flex items-center gap-2">
      <div className="text-right capitalize">
        <p className="text-sm">Selamat Datang</p>
        <p className="text-lg font-semibold duration-150 hover:cursor-pointer group-hover:underline">
          {name}
        </p>
      </div>
      <div className="rounded-full bg-primary text-primary-foreground">
        <Icon name="User" size={32} />
      </div>
    </div>
  );
};

export default NameDisplay;
