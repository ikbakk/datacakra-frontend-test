import { LucideProps, icons } from 'lucide-react';

type IconType = LucideProps & {
  name: keyof typeof icons;
  color?: string;
  size?: number;
};
const Icon = ({ name, color, size, ...props }: IconType) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} color={color} size={size ?? 24} />;
};

export default Icon;
