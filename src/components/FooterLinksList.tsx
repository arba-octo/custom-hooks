import FOOTERLINKSDATAS from '@/datas/footerLinksDatas';

const FooterLinksList = () => {
  return (
    <div className="grid grid-cols-3 justify-between leading-[25px]">
      {FOOTERLINKSDATAS.map((itemList) => {
        return (
          <ul key={itemList.id}>
            <h2>{itemList.titleData}</h2>
            {itemList.linksListData.map((itemLink) => {
              return (
                <li className="text-[13px] leading-[16px] text-[#666666] leading-[20px]" key={itemLink.id}>
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