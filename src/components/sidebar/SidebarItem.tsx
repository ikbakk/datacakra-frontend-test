'use client';

import { icons } from 'lucide-react';
import Icon from '../Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: keyof typeof icons;
  title: string;
  href: string;
};

const SidebarItem = ({ icon, title, href }: SidebarItemProps) => {
  const params = usePathname();

  return (
    <li
      className={cn(
        'group rounded-lg p-2 duration-200 hover:cursor-pointer  hover:bg-white hover:shadow-md',
        params === href && 'bg-white shadow-md',
      )}
    >
      <Link href={href} className="flex w-full items-center gap-2">
        <div
          className={cn(
            'rounded-lg bg-secondary p-2 duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm',
            params === href && 'bg-primary text-primary-foreground shadow-sm',
          )}
        >
          <Icon name={icon} size={24} />
        </div>
        <span className="w-full truncate text-foreground/80 duration-150 group-hover:text-foreground">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
