import React, { useState, useRef } from "react";

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonTitle,
  IonSegment,
  IonSegmentButton,
  IonRefresher,
  IonRefresherContent,
  IonHeader,
  getConfig,
} from "@ionic/react";

import "./HomePage.scss";
import "./Main.css";

import * as selectors from "../data/selectors";
import { connect } from "../data/connect";
import { setSearchText } from "../data/sessions/sessions.actions";
// import { Schedule } from "../models/Schedule";
import HomeHeader from "../components/HomeHeader";

interface OwnProps {}

interface StateProps {
  mode: "ios" | "md";
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}

type HomePageProps = OwnProps & StateProps & DispatchProps;

const HomePage: React.FC<HomePageProps> = ({
  setSearchText,
  mode,
}) => {
  const [segment, setSegment] = useState<"all" | "favorites">("all");
  // const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  // const [showCompleteToast, setShowCompleteToast] = useState(false);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === "ios";

  const doRefresh = () => {
    setTimeout(() => {
      ionRefresherRef.current!.complete();
      // setShowCompleteToast(true);
    }, 2500);
  };

  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <div className="bg-background-color">
          <div className="container">
            <div className="content-home">
              
              <div className="bg-white rounded-3xl mt-4 mb-28 mx-3 py-4 px-3">
                <div className="text-xs flex secondary-color px-3 border-b pb-2 mb-3">
                  <div className="mr-2">
                    <img src="assets/images/home/discovery-icon.png" alt="" />
                  </div>
                  <div className="">
                    Post from <span className="font-bold">Bali Group</span>
                  </div>
                </div>
                <div className="flex mb-3">
                  <div className="w-1/6 mr-2">
                    <img src="assets/images/home/roman-pic.png" alt="" />
                  </div>
                  <div className="text-sm mr-4 w-2/3 text-main-color font-light">
                    <span className="font-medium">Roman lit</span> added
                    <span className="font-medium">Bali Experience</span>
                    <br />
                    <span className="text-gray-color text-xs">
                      April 20, 2021
                    </span>
                  </div>
                  <div className="1/6">
                    <img src="assets/images/home/more-icon.png" alt="" />
                  </div>
                </div>
                <div className="text-main-color text-sm font-light px-2 mb-3">
                  Bali Island
                </div>
                <div className="mb-3 rounded-3xl relative">
                  <img
                    src="assets/images/home/nature-home-3.png"
                    alt=""
                    className="rounded-3xl mx-auto"
                  />
                  <div className="absolute bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <img src="assets/images/home/light-location.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-between mb-3 text-main-color pb-3 px-3">
                  <div className="">
                    <img
                      src="assets/images/home/heart-icon.png"
                      alt=""
                      className="inline-block"
                    />
                    <span className="secondary-color font-medium text-xs">
                      326
                    </span>
                  </div>
                  <div className="secondary-color font-medium text-xs">
                    23 <span className="font-normal">comments</span>
                  </div>
                </div>
                <div className="border-b w-11/12 mx-auto my-3"></div>
                <div className="flex secondary-color text-xs px-3">
                  <div className="w-1/4">
                    <div className="text-center">
                      <img
                        src="assets/images/home/heart.png"
                        className="mx-auto mb-2"
                        alt=""
                      />
                      <div className="">Like</div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <div className="text-center">
                      <img
                        src="assets/images/home/chat-icon.png"
                        className="mx-auto mb-2"
                        alt=""
                      />
                      <div className="">Comment</div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <div className="text-center">
                      <img
                        src="assets/images/home/share-icon.png"
                        className="mx-auto mb-2"
                        alt=""
                      />
                      <div className="">Send</div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <div className="text-center">
                      <img
                        src="assets/images/home/pin-icon.png"
                        className="mx-auto mb-2"
                        alt=""
                      />
                      <div className="">Save</div>
                    </div>
                  </div>
                </div>
                <div className="flex my-3 px-3 items-center">
                  <div className="w-1/6">
                    <img src="assets/images/home/ariana-small.png" alt="" />
                  </div>
                  <div className="relative w-5/6">
                    <form>
                      <input
                        type="text"
                        placeholder="Leave your thouths here..."
                        className="rounded-full text-sm border w-full bg-lines-color py-2 indent-4"
                      />
                    </form>
                    <div className="absolute text-sm font-medium secondary-color top-0 translate-y-1/2 right-0 -translate-x-1/2">
                      Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  component: React.memo(HomePage),
});
