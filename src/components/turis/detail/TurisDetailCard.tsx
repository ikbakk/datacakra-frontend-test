type TurisDetailCardProps = {
  title: string;
  children: React.ReactNode;
};

const TurisDetailCard = ({ children, title }: TurisDetailCardProps) => {
  return (
    <section className="flex w-full flex-col gap-4 rounded-lg bg-card p-4 text-card-foreground shadow-md">
      <header>
        <h3 className="text-xl font-semibold">{title}</h3>
      </header>
      {children}
    </section>
  );
};

export default TurisDetailCard;
