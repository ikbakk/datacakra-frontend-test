import SidebarItem from './SidebarItem';

type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  return (
    <section className="flex w-[20%] flex-grow-0 flex-col gap-8 py-8">
      <header className="text-wrap px-4 text-center text-3xl leading-none">
        Biro Travel AAB
      </header>
      <section className="flex flex-col justify-center px-4">
        <ul>
          <SidebarItem href="/turis" icon="List" title="Daftar Turis" />
        </ul>
        <p className="mb-2 mt-8 text-center font-semibold">Settings</p>
        <ul>
          <SidebarItem href="/profil" icon="User" title="Profil" />
          <SidebarItem href="/register" icon="UserPlus" title="Register" />
        </ul>
      </section>
    </section>
  );
};

export default Sidebar;
