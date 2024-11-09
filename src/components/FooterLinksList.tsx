import FOOTERLINKSDATAS from "@/datas/footerLinksDatas";


const FooterLinksList = (FOOTERLINKSDATAS) => {
  return (
      <ul>
          FOOTERLINKSDATAS.map((item) => {
              return (
                  <li className="text-[13px] leading-[16px] text-[#666666]">
                    <a className="" href={ item.linksListData.linkData }>{ item.linksListData.nameData}</a>
                    </li>
              )
            }
      </ul>
  );
};
export default FooterLinksList;