type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-full w-full p-4">
      <section className="flex w-full flex-col justify-between p-4">
        <h3>Travel App</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          tenetur maiores doloribus corrupti itaque. Laborum, debitis incidunt
          delectus ipsa, atque itaque dolor qui id nihil quaerat voluptas
          officiis doloremque at similique quas voluptate deleniti. Ipsam, quas
          dolorem! Atque, architecto unde?
        </p>
      </section>
      <section className="flex w-full flex-col items-center justify-center p-4">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
