import AuthContainer from '@/components/auth/AuthContainer';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage = () => {
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
