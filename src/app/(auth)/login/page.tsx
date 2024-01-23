import AuthContainer from '@/components/auth/AuthContainer';
import LoginForm from '@/components/auth/LoginForm';
import { getToken } from '@/lib/cookieCheck';
import { redirect } from 'next/navigation';

const LoginPage = () => {
  const token = getToken();

  if (token) {
    redirect('/');
  }
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
