import { useState } from 'react';
import Image from 'next/image';

import { CgMenu, CgMenuGridR } from 'react-icons/cg';
import { BsBell } from 'react-icons/bs';
import { HiMicrophone } from 'react-icons/hi';
import {
  AiOutlineVideoCameraAdd,
  AiOutlineSearch,
  AiOutlineArrowLeft,
} from 'react-icons/ai';

import ytlogo from '../../images/ytlogo.png';
import Searchbar from '../Searchbar';

function Header() {
  //searchbar status in mobile
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="flex justify-center items-center sticky bg-[#22222287] w-full h-14 px-2 py-1">
      <div className="flex items-center mx-auto text-[#eee] w-[97%]">
        <CgMenu
          className={`${
            isOpen ? 'hidden' : 'block'
          } cursor-pointer text-[23px] mr-5 flex-none sm:block`}
        />

        <div
          className={`${
            isOpen ? 'hidden' : 'block'
          } flex-none mt-1 mr-[30px] sm:mr-[100px] sm:block`}
        >
          <Image src={ytlogo} width={110} height={60} alt="youtube logo" />
        </div>

        <div className="flex items-center ml-5 mr-2  w-full max-w-2xl sm:p-3">
          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } cursor-pointer text-[22px] mr-12 sm:hidden`}
          >
            <AiOutlineArrowLeft onClick={() => setisOpen(false)} />
          </div>

          <div
            className={`w-[74%] ml-1 mr-2 ${
              isOpen ? 'block' : 'hidden'
            } sm:block sm:w-full`}
            onClick={() => setisOpen(true)}
          >
            <Searchbar />
          </div>

          <div
            className={`${
              isOpen ? 'hidden' : ''
            } w-8  cursor-pointer ml-auto sm:hidden text-[24px]`}
            onClick={() => setisOpen(true)}
          >
            <AiOutlineSearch />
          </div>

          <div className="ml-2 text-[23px] cursor-pointer sm:rounded-full sm:bg-[#111] sm:p-2 sm:ml-0">
            <HiMicrophone />
          </div>
        </div>

        <div
          className={`${
            isOpen ? 'hidden' : 'flex'
          } ml-1 mr-1 flex items-center text-[23px] w-[185px] shrink-0 sm:flex sm:ml-auto sm:w-[200px]`}
        >
          <AiOutlineVideoCameraAdd className="cursor-pointer ml-1 mr-5 sm:mr-7" />
          <CgMenuGridR className="cursor-pointer mr-5 sm:mr-7" />
          <BsBell className="cursor-pointer text-[20px] mr-6 sm:mr-8" />
          <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-slate-400">
            f
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
