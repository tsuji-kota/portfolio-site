"use client"

import { Box, Chip, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React,{use, useEffect, useState} from 'react';
import "./Contents.css"

interface Contents {
    id: number;
    profile_id: string;
    event_name: string;
    tag: string;
    image_path: string;
    make_time: string;
    contents: string;

}
const data:Contents = {
    id: 1,
    profile_id: "tsuji kota",
    event_name: "研究室内で開催したAWS勉強会について紹介します！",
    tag: "ストーリー",
    image_path: "/public/contents/1.jpg",
    make_time: "make_time",
    contents: "知ってた？？今マクドのサムライマックの肉厚ビーフ肉が3枚入ってるらしいよサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマックサムライマック"
}


export const Contents = () => {

    const [tabValue,setTabValue] = useState(1)
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
            console.log(res.data)
            //dataのtagによってtagの色変更，または格納時に保存
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        get_data();
    },[])

    return (
        <div>

            <Stack justifyContent="flex-end">
            <Chip label={data.tag} color="success"></Chip>
            <Typography variant="h6"  sx={{ fontFamily: 'Roboto Light' }} >{data.make_time}</Typography>
            </Stack>
            <Stack className="rad">
                <Box >
                    <Typography variant="h1">{data.event_name}</Typography>
                </Box>
                <Box
                component="img"
                //ここにimageへのpathを入れる（publicフォルダを作成して保存）
                src ={data.image_path}
                alt="event_image"
                >
                </Box>
                <Box>
                    <Typography variant="h6">{data.contents}</Typography>
                </Box>
            </Stack>



        </div>
    )
}
