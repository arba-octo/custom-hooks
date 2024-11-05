import path from 'path';
import fs from 'fs';
import Header from '@/components/Header';
import Line from '@/components/Line';
import Title from '@/components/Title';
import HookList from '@/components/HookList';

const getCustomHooks = () => {
  const hooksPath = path.join(process.cwd(), 'collections');
  const filenames = fs.readdirSync(hooksPath);

  return filenames.reduce((acc, hookName: string) => {
    const filePath = path.join(hooksPath, hookName);
    const hookCode = fs.readFileSync(filePath, 'utf-8');

    return acc.concat({ hookName, hookCode });
  }, [] as { hookName: string, hookCode: string }[]);
};

function Home() {
  const hooksCollectionData = getCustomHooks();

  return (
    <div>
      <Header/>
      <Line/>
      <Title/>
      <HookList hooksCollection={hooksCollectionData} />
    </div>
  );
}

export default Home;