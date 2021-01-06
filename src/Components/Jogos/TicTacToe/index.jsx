import React from "react";

import Game from "./Components/Game";

import "./style.css";

export default function TicTacToe() {
    return (
        <>
            <div className="TicTacToeContainer">
                <div>
                    {/* <button>Computer</button>
                    <button>Local</button>
                    <button>Online</button>
                    <button>Settings</button> */}
                    <Game />
                </div>
            </div>
        </>
    )
}