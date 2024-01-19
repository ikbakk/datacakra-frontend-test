import Link from 'next/link';

type AuthContainerProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  type: 'register' | 'login';
};

const AuthContainer = ({
  title,
  subtitle,
  children,
  type,
}: AuthContainerProps) => {
  return (
    <div className="flex flex-col gap-8">
      <section className="text-center">
        <h3 className="text-xl">{title}</h3>
        <p>{subtitle}</p>
      </section>
      <section className="flex flex-col gap-2">{children}</section>
      {type === 'register' ? (
        <p className="text-center">
          Sudah punya akun?{' '}
          <Link
            className="font-bold duration-200 hover:underline"
            href="/login"
          >
            Login
          </Link>
        </p>
      ) : (
        <p className="text-center">
          Belum punya akun?{' '}
          <Link
            className="font-bold duration-200 hover:underline"
            href="/register"
          >
            Daftar sekarang
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthContainer;
