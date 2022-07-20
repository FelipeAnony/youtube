import Link from 'next/link';

type Props = {
  thumbnail: string;
  channel: string;
  channelLogo: string;
  title: string;
  views: string;
  date: string;
};

function VideoBox({
  thumbnail,
  channel,
  channelLogo,
  title,
  views,
  date,
}: Props) {
  return (
    <section className="flex flex-col items-center h-[300px] text-white mt-3">
      <div className="flex justify-center items-center h-[55%]  w-full cursor-pointer">
        <img src={thumbnail} />
      </div>

      <div className="flex justify-center h-[45%] w-full max-w-[290px] mt-3">
        <div className="w-fit h-fit mt-3 mr-3 rounded-full overflow-hidden">
          <img src={channelLogo} width={36} height={36} alt="channel logo" />
        </div>

        <div className="w-full">
          <header className="flex">
            <span className="text-sm font-bold">{title}</span>
          </header>

          <div className="flex flex-col text-xs mt-2 text-[#aaa]">
            <Link href="/">{channel}</Link>
            <span className="flex flex-wrap mt-1 ">
              {views} <span className="mx-1"> • </span> <span>{date}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoBox;
