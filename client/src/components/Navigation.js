import { Link } from "react-router-dom"
import styled from "styled-components"

const Outer = styled.div`
    width: 100vw;
`

const ButtonsArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffd489;
    padding: 1rem;

    & button {
        border: none;
        border-radius: 2rem;
        margin: auto 0.5rem;
        padding: 0.5rem 1rem;
        background-color: #ffb83e;
        color: #f2782b;
        font-size: 1.2rem;

        &:hover {
            color: black;
            background-color: #ff9843;
        }
    }
`

const HomeButtonArea = styled.div`
    display: flex;
    margin-right: 2rem;

    & button {
        font-weight: bold;
        border: none;
        margin: auto 0.5rem;
        padding: 0.5rem;
        background-color: #ffa200;
        color: #f47600;
    }
`

export default function Navigation() {
    return (
        <Outer className="navigation">
            <ButtonsArea>
                <HomeButtonArea>
                    <Link to="/mainpage">
                        <button className="homeButton">Home</button>
                    </Link>
                </HomeButtonArea>
                <div className="boardButtonsSpace">
                    <Link to="/board/hamster">
                        <button className="boardButton">햄스터</button>
                    </Link>
                    <Link to="/board/chick">
                        <button className="boardButton">병아리</button>
                    </Link>
                    <Link to="/board/parrot">
                        <button className="boardButton">앵무새</button>
                    </Link>
                    <Link to="/board/rabbit">
                        <button className="boardButton">토끼</button>
                    </Link>
                    <Link to="/board/hedgehog">
                        <button className="boardButton">고슴도치</button>
                    </Link>
                </div>
            </ButtonsArea>
        </Outer>
    )
}

