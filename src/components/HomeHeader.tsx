import React, { useState } from "react";
import { 
  IonList,
  IonItem,
  IonLabel,
  IonModal
} from "@ionic/react";

import Lists from '../pages/Lists'

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <>
      <div className="w-full shadow-md relative pt-8 pb-3 rounded-b-xl bg-white">
        <img src="assets/images/horz-logo.png" className="mx-auto" alt="logo" />
        <div className="absolute bottom-0 right-0 -translate-y-1/2 -translate-x-full">
          <img src="assets/images/home/notifs-icon.png" alt="" />
        </div>
      </div>
      <IonModal>
        <Lists />
      </IonModal>
    </>
  );
};

export default HomeHeader;
