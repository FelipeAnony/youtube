import { IconType } from 'react-icons';

type Props = {
  href: string;
  Icon?: IconType;
  text: string;
  type: 'aside' | 'navbar';
};

function NavLink({ href, Icon, text, type }: Props) {
  return (
    <div
      className={`${
        type === 'aside'
          ? 'w-[74px] h-[72px] hover:bg-[#333]'
          : 'px-3 mx-3 h-8 rounded-2xl bg-[#333] border-[#555] border hover:bg-[#555] transition'
      } flex flex-col items-center justify-center text-white cursor-pointer `}
    >
      {Icon ? <Icon className="text-2xl" /> : null}
      <span
        className={`${type === 'aside' ? 'mt-2 text-[10px]' : 'text-sm w-max'}`}
      >
        {text}
      </span>
    </div>
  );
}

export default NavLink;
