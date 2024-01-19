type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <section className="hidden w-[40%] flex-col justify-between bg-primary p-4 text-primary-foreground md:flex">
        <h3 className="text-3xl">Travel App</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          tenetur maiores doloribus corrupti itaque. Laborum, debitis incidunt
          delectus ipsa, atque itaque dolor qui id nihil quaerat voluptas
          officiis doloremque at similique quas voluptate deleniti. Ipsam, quas
          dolorem! Atque, architecto unde?
        </p>
      </section>
      <section className="flex h-full flex-col items-center justify-center bg-secondary p-4 text-secondary-foreground md:w-[60%]">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
