/* eslint-disable */
import Posts from "../components/Posts"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import React, { useEffect } from "react"
import axios from "axios"
import Footer from "../components/Footer"

const url =
    process.env.REACT_APP_URL ||
    "http://ec2-3-35-9-246.ap-northeast-2.compute.amazonaws.com"
export default function Parrot(props) {
    useEffect(() => {
        props.curAnimalChange("parrot")
        axios({
            url: url + "/postlist",
            method: "get",
            withCredentials: true,
        }).then((res) => {
            props.getPostList(res.data)
        })
    }, [])
    return (
        <div className="mainPage">
            <Header
                setIsLogin={props.setIsLogin}
                setUserinfo={props.setUserinfo}
            />
            <Navigation isLinkToWritePage />
            <Posts
                title="앵무새"
                isLinkToWritePage
                postList={props.postList}
                curAnimal={props.curAnimal}
                curPostRead={props.curPostRead}
            />
            <Footer></Footer>
        </div>
    )
}
