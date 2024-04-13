"use client";

import { Box, Chip, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import "./Contents.css";

interface Contents {
  id: number;
  profile_id: string;
  event_name: string;
  tag: string;
  img_path: string;
  make_time: string;
  contents: string;
}
const data: Contents = {
  id: 1,
  profile_id: "tsuji kota",
  event_name: "研究室内で開催したAWS勉強会について紹介します！",
  tag: "ストーリー",
  img_path:
    "https://s3-ap-northeast-1.amazonaws.com/storage.withnews.jp/2020/07/16/e/90/e901117a-l.jpg",
  make_time: "2024.04.11",
  contents:
    "知ってた？？今マクドのサムライマックの肉厚ビーフ肉が3枚入ってるらしいよサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマック",
};

export const Contents = () => {
  const [tabValue, setTabValue] = useState(1);
  const get_data = async () => {
    const formData = new FormData();
    //eventのidを追加
    formData.append("event_id", "id");
    await axios({
      method: "get",
      url: "http://localhost:8080/contents",
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        //dataのtagによってtagの色変更，または格納時に保存
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    get_data();
  }, []);

  return (
    <div className="rad">
      <Box textAlign={"right"}>
        <Chip label={data.tag} color="success"></Chip>
        <Typography variant="h6" sx={{ fontFamily: "Roboto", fontWeight: 50 }}>
          {data.make_time}
        </Typography>
      </Box>

      <Stack>
        <Box
          mt="5px"
          mb="15px"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",

            border: "2px solid black",
            borderRadius: "50px",
          }}
        >
          <Typography variant="h5">{data.event_name}</Typography>
        </Box>
        <Box
          component="img"
          //ここにimageへのpathを入れる（publicフォルダを作成して保存）
          src={data.img_path}
          alt="event_image"
          sx={{
            borderRadius: "50px",
          }}
        ></Box>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: "50px",
          }}
          mt="15px"
        >
          <Typography variant="h6" id="contents_body">
            {data.contents}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};
