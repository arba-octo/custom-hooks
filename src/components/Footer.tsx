import LinkLikeButton from '@/components/LinkLikeButton';
import FooterLinksList from '@/components/FooterLinksList';


const Footer = () => {
  return (
    <div className="flex max-w-7xl mx-auto px-20 mt-[20px]">
      <div className="flex flex-wrap justify-between gap-[10px] w-[400px]">
        <span className="text-[28px]">Contributing?</span>
        <LinkLikeButton />
        <span className="text-[13px] leading-[16px] text-[#666666]">Pull requests are welcomed. To submit your custom hook, please create a markdown file, and put it in a particular category of the collections folder.</span>
      </div>
      <div className="flex text-[17px] leading-[24px]">
        <h2 className="">Technology stack</h2>

        <FooterLinksList/>

      </div>
    </div>
  );
};
export default Footer;