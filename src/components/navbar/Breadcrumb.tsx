'use client';

import { usePathname } from 'next/navigation';

type BreadcrumbProps = {};

const Breadcrumb = ({}: BreadcrumbProps) => {
  const pathname = usePathname().replace('/', '');
  return (
    <section className="w-full font-semibold capitalize">
      <p className="text-primary ">
        <span className="font-normal text-black/70">App</span> / {pathname}
      </p>
      <h4 className="text-lg">{pathname}</h4>
    </section>
  );
};

export default Breadcrumb;
