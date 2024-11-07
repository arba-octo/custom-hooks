import { Inter700 } from '@/styles/fonts';
import { Inter200 } from '@/styles/fonts';
import Image from 'next/image';

const Title = () => {
  return (
    <div>
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
      <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" width="100%" height="50px" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" fill="#f2f5ff"></path>
      </svg>
    </div>
  );
};
export default Title;