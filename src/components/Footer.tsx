import LinkLikeButton from '@/components/LinkLikeButton';
import FooterLinksList from '@/components/FooterLinksList';


const Footer = () => {
  return (
    <div className="grid grid-cols-[400px,_1fr] max-w-7xl gap-x-20 mx-auto px-20 py-20 mt-[20px]
    max-[950px]:grid-cols-[300px,_1fr] max-[950px]:gap-x-10
    max-[800px]:grid-cols-1 max-[800px]:mt-[0px]
    max-[768px]:px-5 max-[768px]:py-10">
      <div className="flex flex-wrap justify-between gap-[20px]
       max-[950px]:flex-col max-[950px]:flex-nowrap
       max-[800px]:flex-row max-[800px]:flex-wrap">
        <span className="text-[28px] grow-0">Contributing?</span>
        <LinkLikeButton size="px-5 h-[2.5rem] grow" />
        <span className="text-[13px] leading-[16px] text-[#666666]">Pull requests are welcomed. To submit your custom hook, please create a markdown file, and put it in a particular category of the collections folder.</span>
      </div>
      <FooterLinksList/>
    </div>
  );
};
export default Footer;