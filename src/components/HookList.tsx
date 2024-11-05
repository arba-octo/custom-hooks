import { Inter700 } from '@/styles/fonts';

type TProps = {
    hooksCollection: {
        hookName: string,
        hookCode: string
    }[]
}

const HookList = ({ hooksCollection }: TProps) => {
  return (
    <div className="max-w-7xl mx-auto px-20 mt-3">
      <h1 className={`${Inter700.className} text-[35px] text-center`}>
          Hooks
      </h1>
      <ul>
        {hooksCollection.map((hookItem) => {
          return <li key={hookItem.hookName}>{hookItem.hookName}</li>;
        })}
      </ul>
    </div>
  );
};
export default HookList;