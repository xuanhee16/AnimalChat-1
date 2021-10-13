import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Posts from "../components/Posts"
// import Boards from "./4-1.boards";
// import Hamster from "./5-1.hamster"
// import Chick from "./5-2.chick"
// import Parrot from "./5-3.parrot"
// import Rabbit from "./5-4.rabbit"
// import Hedgehog from "./5-5.hedgehog"

const Outer = styled.div`
  width: 100vw;
`;

export default function MainPage(props) {
  //console.log(props)
  return (
    <Outer className="mainPage">
      <Header />
      <Navigation />
      <Posts title="전체 게시물"/>
    </Outer>
  )
}
