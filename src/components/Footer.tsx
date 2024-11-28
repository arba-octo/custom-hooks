import LinkLikeButton from '@/components/LinkLikeButton';
import FooterLinksList from '@/components/FooterLinksList';


const Footer = () => {
  return (
    <div className="grid grid-cols-[400px,_1fr] max-w-7xl gap-x-20 mx-auto px-20 py-20 mt-[20px]
    max-[768px]:px-5">
      <div className="flex flex-wrap justify-between gap-[10px] w-[400px]">
        <span className="text-[28px]">Contributing?</span>
        <LinkLikeButton />
        <span className="text-[13px] leading-[16px] text-[#666666]">Pull requests are welcomed. To submit your custom hook, please create a markdown file, and put it in a particular category of the collections folder.</span>
      </div>
      <FooterLinksList/>
    </div>
  );
};
export default Footer;