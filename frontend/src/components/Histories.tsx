// "use client";

import { HistoryCard } from "./Components";

import "@/styles/Histories.css";

export type History = {
  name: string;
  abstract: string;
  img: string;
};

export const Histories = () => {
  const histories: History[] = [
    {
      name: "粗品",
      abstract: "ギャンブラー",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fVZtcAtKE_gx_9w_Ce33CG8hqduwtYJ7G0BpIRKN0en_8Dnx",
    },
    {
      name: "せいや",
      abstract: "仮免監査員",
      img: "https://s3-ap-northeast-1.amazonaws.com/storage.withnews.jp/2020/07/16/e/90/e901117a-l.jpg",
    },
    {
      name: "佐川ピン芸人",
      abstract: "マッシュルーム",
      img: "https://pbs.twimg.com/profile_images/1614539507776499712/90wthMPe_400x400.jpg",
    },
    {
      name: "西さん",
      abstract: "アフロパーマ",
      img: "https://pbs.twimg.com/profile_images/1648764597921546240/CTtWOvFf_400x400.jpg",
    },
    {
      name: "粗品",
      abstract: "ギャンブラー",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fVZtcAtKE_gx_9w_Ce33CG8hqduwtYJ7G0BpIRKN0en_8Dnx",
    },
    {
      name: "せいや",
      abstract: "仮免監査員",
      img: "https://s3-ap-northeast-1.amazonaws.com/storage.withnews.jp/2020/07/16/e/90/e901117a-l.jpg",
    },
    {
      name: "佐川ピン芸人",
      abstract: "マッシュルーム",
      img: "https://pbs.twimg.com/profile_images/1614539507776499712/90wthMPe_400x400.jpg",
    },
    {
      name: "西さん",
      abstract: "アフロパーマ",
      img: "https://pbs.twimg.com/profile_images/1648764597921546240/CTtWOvFf_400x400.jpg",
    },
  ];

  return (
    <div className="historyList">
      {histories.map((history: History, index: number) => {
        return <HistoryCard key={index} history={history} />;
      })}
    </div>
  );
};
