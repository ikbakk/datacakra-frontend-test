'use client';

import { usePathname } from 'next/navigation';

type BreadcrumbProps = {};

const Breadcrumb = ({}: BreadcrumbProps) => {
  const pathname = usePathname().replace('/', '');
  const pageName = pathname !== '' ? pathname.split('/')[0] : 'Dashboard';
  return (
    <section className="w-full font-semibold capitalize">
      {/* <p className="text-primary">
        <span className="font-normal text-black/70">App</span> {'>'}{' '}
        {pathname.replace('/', ' / ')}
      </p> */}
      <h4 className="text-2xl">{`${pageName} Page`}</h4>
    </section>
  );
};

export default Breadcrumb;
