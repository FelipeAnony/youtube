import React, { DOMAttributes, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Styles from './styles.module.css';

import Input from '../Input';

function Searchbar() {
  const [active, setActive] = useState(false);

  return (
    <section
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="flex w-full relative items-center bg-[#111] h-10"
    >
      <div
        className={`${active ? Styles.searchbarInnerContainer : ''}
         flex items-center h-10 w-full rounded-l-sm ${
           active
             ? 'border-blue-600 border-solid border border-l-[transparent]'
             : 'border-[#333] border-solid border'
         }`}
      >
        <Input name="search" placeholder="Search" />
      </div>

      <div className="cursor-pointer flex items-center justify-center text-[22px] bg-[#333] h-full w-[66px] shrink-0 rounded-r-sm">
        <AiOutlineSearch />
      </div>
    </section>
  );
}

export default Searchbar;
