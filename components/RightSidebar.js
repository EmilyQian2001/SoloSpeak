import React from "react";
import Ads from "./Ads";

const RightSidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center">
        <p className="flex text-lg font-semibold flex-grow ">Sponsored</p>
      </div>
      <Ads
        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t45.1600-4/356987995_23856950479030133_6693700266866233819_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=101&ccb=1-7&_nc_sid=67cdda&_nc_ohc=X-XJ69p7yX0AX-BmWmH&_nc_ht=scontent-xsp1-2.xx&oh=00_AfDmv_d7CulHoklYU0w5k2pRHyEy9uDkou3jOp6j9OwMNg&oe=64D9FB87"
        url="https://www.adcreative.ai"
      />
      <Ads
        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t45.1600-4/348392050_6386008839068_1751803033905607547_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=106&ccb=1-7&_nc_sid=67cdda&_nc_ohc=3WdBOyZYf2IAX_Aky_h&_nc_ht=scontent-xsp1-2.xx&oh=00_AfCOjb2wITopmJY1K6uHKjadoBlIP4hQkTs58ND4HJM4KQ&oe=64D8A05C"
        url="https://www.rotita.com/"
      />
    </div>
  );
};

export default RightSidebar;
