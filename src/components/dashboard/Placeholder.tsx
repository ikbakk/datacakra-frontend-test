import Icon from '../Icon';

const PlaceholderDashboard = () => {
  return (
    <>
      <div className="flex h-72 w-3/4 gap-4 rounded-lg bg-card p-4 shadow-md">
        <section className="flex h-full flex-col justify-between">
          <header>
            <h4 className="font-semibold text-card-foreground/70">
              Built by developers
            </h4>
            <h3 className="text-xl font-bold text-card-foreground">
              UI Dashboard
            </h3>
          </header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            totam id!
          </p>
          <p>Read More</p>
        </section>
        <section className="h-full w-full rounded-lg bg-accent ">
          <Icon name="Rocket" className="h-full w-full" />
        </section>
      </div>
      <div className="flex w-1/4 flex-col justify-between rounded-lg bg-card-foreground p-4 text-card shadow-md">
        <h3 className="font-semibold text-card">Tentang Kami</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, totam
          id!
        </p>
      </div>
    </>
  );
};

export default PlaceholderDashboard;
