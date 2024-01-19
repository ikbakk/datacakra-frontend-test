import Icon from '@/components/Icon';
import InputWithLabel from '@/components/InputWithLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

type RegisterPageProps = {};

const RegisterPage = ({}: RegisterPageProps) => {
  return (
    <div className="flex flex-col gap-8">
      <section className="text-center">
        <h3 className="text-xl">Buat akun baru</h3>
        <p>Masukkan email anda untuk membuat akun baru</p>
      </section>
      <section className="flex flex-col gap-2">
        <form className="flex flex-col gap-2">
          <InputWithLabel
            name="email"
            placeholder="contoh@email.com"
            type="email"
          />
          <InputWithLabel name="nama" placeholder="John Doe" type="text" />
          <InputWithLabel
            name="password"
            placeholder="Minimal 4 karakter"
            type="password"
          />
          <Button>Daftar Sekarang</Button>
        </form>
        <p className="text-center">Atau</p>
        <Button>
          <Icon className="mr-2" name="Github" /> Github
        </Button>
        <Button>
          <Icon className="mr-2" name="Facebook" /> Facebook
        </Button>
      </section>
      <p className="text-center">
        Sudah punya akun?{' '}
        <Link className="font-bold duration-200 hover:underline" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
