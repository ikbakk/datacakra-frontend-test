type CustomHeaderWrapperProps = {
  children: React.ReactNode;
};

const CustomHeaderWrapper = ({ children }: CustomHeaderWrapperProps) => {
  return (
    <section className="relative h-1/3 w-full rounded-lg">
      <header className="absolute inset-y-2/4 left-1/2 z-10 flex h-3/4 w-[85%] -translate-x-1/2 items-center justify-between gap-8  overflow-hidden rounded-lg bg-card/50 p-4 text-card-foreground shadow-md backdrop-blur-md ">
        <section className="flex h-full w-full gap-8">{children}</section>
      </header>
      <div className='h-full w-full rounded-lg bg-opacity-80 bg-[url("/images/curved0.JPG")] bg-cover bg-[10%_center] bg-no-repeat grayscale-[20%] saturate-50' />
    </section>
  );
};

export default CustomHeaderWrapper;
