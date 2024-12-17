import FOOTERLINKSDATAS from '@/datas/footerLinksDatas';

const FooterLinksList = () => {
  return (
    <div className="flex gap-x-3 leading-[25px] max-[800px]:mt-4">
      {FOOTERLINKSDATAS.map((itemList) => {
        return (
          <ul key={itemList.id} className="flex-grow">
            <h2>{itemList.titleData}</h2>
            {itemList.linksListData.map((itemLink) => {
              return (
                <li className="text-[13px] text-[#666666] leading-[20px]" key={itemLink.id}>
                  <a className="" href={itemLink.linkData}>{itemLink.nameData}</a>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>


  );
};
export default FooterLinksList;