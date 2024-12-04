import path from 'path';
import fs from 'fs';
import Header from '@/components/Header';
import Line from '@/components/Line';
import Title from '@/components/Title';
import HookList from '@/components/HookList';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import ModalOpenContextProvider from '@/context/ModalOpenContext';
import ModalHookCodeContextProvider from '@/context/ModalHookCodeContext';
import ModalCloseContextProvider from '@/context/ModalCloseContext';

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
    <ModalOpenContextProvider>
      <ModalHookCodeContextProvider>
        <div>
          <Header/>
          <Line/>
          <Title/>
          <ModalCloseContextProvider>
            <HookList hooksCollection={hooksCollectionData} />
            <Modal />
          </ModalCloseContextProvider>
          <Footer/>
        </div>
      </ModalHookCodeContextProvider>
    </ModalOpenContextProvider>

  );
}

export default Home;