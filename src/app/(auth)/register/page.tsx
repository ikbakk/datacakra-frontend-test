import Icon from '@/components/Icon';
import AuthContainer from '@/components/auth/AuthContainer';
import RegisterForm from '@/components/auth/RegisterForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type RegisterPageProps = {};

const RegisterPage = ({}: RegisterPageProps) => {
  return (
    <AuthContainer
      title="Buat akun baru"
      subtitle="Masukkan email anda untuk membuat akun baru"
      type="register"
    >
      <RegisterForm />
      <p className="text-center">Atau</p>
      <Button>
        <Icon className="mr-2" name="Github" /> Github
      </Button>
      <Button>
        <Icon className="mr-2" name="Facebook" /> Facebook
      </Button>
    </AuthContainer>
  );
};

export default RegisterPage;
