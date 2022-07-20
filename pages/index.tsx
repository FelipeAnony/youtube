import type { NextPage } from 'next';
import { asideLinksData } from '../assets/asideLinks';
import { navbarLinks } from '../assets/navbarLinks';
import { videosList } from '../assets/videosList';
import NavLinks from '../components/NavLinks';
import VideoBox from '../components/VideoBox';

const Home: NextPage = () => {
  return (
    <div className="flex">
      <aside className="hidden md:flex flex-col fixed pt-2 w-[74px] h-screen bg-[#212121]">
        {asideLinksData.map((e) => (
          <NavLinks
            key={e.text}
            type="aside"
            Icon={e.icon}
            text={e.text}
            href={e.href}
          />
        ))}
      </aside>
      <article className="flex w-full flex-col md:pl-[74px] ">
        <nav className="flex sticky top-14 items-center bg-[#212121fb] h-14 w-full  border-[#55555587] border-t-[1px] border-b overflow-x-auto scrollbarHidden">
          {navbarLinks.map((e) => (
            <NavLinks key={e.text} href={e.href} text={e.text} type={e.type} />
          ))}
        </nav>
        <section className="p-4 grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {videosList.map((e, i) => (
            <VideoBox
              key={i}
              thumbnail={e.thumbnail}
              title={e.title}
              channelLogo={e.channelLogo}
              channel={e.channel}
              views={e.views}
              date={e.date}
            />
          ))}
        </section>
      </article>
    </div>
  );
};

export default Home;
