import path from 'path';
import fs from 'fs';
import Header from '@/components/Header';
import Line from '@/components/Line';
import Title from '@/components/Title';
import HookList from '@/components/HookList';

const getCustomHooks = () => {
  const hooksPath = path.join(process.cwd(), 'collections');
  const filenames = fs.readdirSync(hooksPath);


  return filenames.reduce((acc, fileName: string) => {
    const filePath = path.join(hooksPath, fileName);
    const hookCode = fs.readFileSync(filePath, 'utf-8');
    const hookName = fileName.slice(0, -4);
    return acc.concat({ fileName, hookCode, hookName });
  }, [] as { fileName: string, hookCode: string, hookName: string }[]);
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