import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex gap-x-5 gap-y-2 max-w-7xl mx-auto mt-3 px-20
     max-[768px]:flex-wrap max-[768px]:justify-between max-[768px]:px-5">
      <Image
        className="max-[768px]:order-1 grow-0"
        src="/images/logo.svg"
        alt="Логотип"
        width="90"
        height="23">
      </Image>
      <div className="flex grow order-2 gap-x-2 bg-slate-100 rounded-lg p-2 text-slate-400
      max-[768px]:order-3 max-[768px]:w-full">
        <svg className="m-auto" viewBox="0 0 16 16" width="16" height="16" stroke="none">
          <path d="M9.532 9.539A5 5 0 102.468 2.46 5 5 0 009.532 9.54zm0 0L15 15" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path>
        </svg>
        <input type="text" placeholder="Поиск" className="w-full bg-slate-100 outline-none"/>
      </div>
      <a className="flex flex-row order-3 grow-0 gap-3 my-auto hover:text-slate-400 max-[768px]:order-2" href="https://github.com/arba-octo/custom-hooks">
        <span>add hook</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" width="30" height="30">
          <g clipPath="url(githublogo)">
            <path
              fill="currentColor" fillRule="evenodd"
              d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z"
              clipRule="evenodd" className="jsx-120409797"
            />
          </g>
          <defs>
            <clipPath>
              <path fill="transparent" d="M0 0h15.86v15.86H0z" transform="translate(.253906 .0493164)"/>
            </clipPath>
          </defs>
        </svg>
      </a>
    </header>
  );
};
export default Header;

