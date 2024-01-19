import AuthContainer from '@/components/auth/AuthContainer';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

type LoginPageProps = {};

const LoginPage = ({}: LoginPageProps) => {
  return (
    <AuthContainer
      title="Selamat datang kembali"
      subtitle="Silahkan masukkan kredensial Anda"
      type="login"
    >
      <LoginForm />
    </AuthContainer>
  );
};

export default LoginPage;
