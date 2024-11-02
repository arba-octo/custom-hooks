import { Inter700 } from '@/styles/fonts';
import { Inter200 } from '@/styles/fonts';
import Image from 'next/image';

const Title = () => {
  return (
    <div className="flex max-w-7xl mx-auto px-20 items-center mt-3 gap-10">
      <div className="w-5/12">
        <h1 className={`${Inter700.className} text-[35px]`}>React Custom Hook</h1>
        <p className={`${Inter200.className} pt-2 text-[15px]`}>Will you add your React Custom Hook to the RCOH project?</p>
        <p className={`${Inter200.className} pt-2 pb-3 text-[15px] text-slate-500`}>A custom Hook is a JavaScript function whose name starts with «use» and that may call other Hooks.</p>
        <a href="#" className="flex items-center justify-center bg-gray-600 rounded-md text-white w-[11rem] h-[2.5rem]">
          Add custom Hook
        </a>
      </div>
      <Image className='mx-auto' src="/images/pc2.png" alt="Monitor" width="300" height="300"></Image>
    </div>
  );
};
export default Title;