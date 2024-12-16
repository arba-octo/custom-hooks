import { Inter700 } from '@/styles/fonts';
import { Inter200 } from '@/styles/fonts';
import Image from 'next/image';
import LinkLikeButton from '@/components/LinkLikeButton';

const Title = () => {
  return (
    <div>
      <div className="flex max-w-7xl mx-auto px-20 items-center mt-3 gap-10
      max-[1024px]:my-20
      max-[870px]:px-5 max-[870px]:my-10 max-[870px]:justify-center">
        <div className="w-5/12
        max-[1024px]:w-full max-[1024px]:grid max-[1024px]:grid-rows-[repeat(2, min-content)] max-[1024px]:grid-cols-2 max-[1024px]:gap-x-[30px] max-[1024px]:self-end
        max-[870px]:flex max-[870px]:flex-col max-[870px]:gap-x-[20px] max-[870px]:w-3/5 max-[870px]:text-center max-[870px]:justify-center
        max-[605px]:w-full"
        >
          <h1 className={`${Inter700.className} text-[35px] max-[768px]:justify-center`}>React Custom Hook</h1>
          <p className={`${Inter200.className} pt-2 text-[15px] `}>Will you add your React Custom Hook to the RCOH project?</p>
          <p className={`${Inter200.className} pt-2 pb-3 text-[15px] text-slate-500`}>A custom Hook is a JavaScript function whose name starts with «use» and that may call other Hooks.</p>
          <LinkLikeButton width='w-full max-w-[185px] h-[2.5rem] max-[870px]:max-w-full'/>
        </div>
        <Image className='mx-auto max-[1024px]:hidden max-[1024px]:w-0' src="/images/pc2.png" alt="Monitor" width="300" height="300"></Image>
      </div>
      <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" width="100%" height="50px" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" fill="#f2f5ff"></path>
      </svg>
    </div>
  );
};
export default Title;