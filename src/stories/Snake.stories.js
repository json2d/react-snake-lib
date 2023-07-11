import React from "react";
import { storiesOf } from "@storybook/react";
import "../styles.css";

import { Snake } from "../components/Snake";

const stories = storiesOf("App Test", module);

stories.add('App', () => {
  function logger(score) {
    score && console.log(score);
    console.log("worked")
  }
  return (
    <div style={{height:"500px", width:"500px"}}>
      <Snake
        onScoreChange={logger}
        onGameOver={logger}
        onGameStart={logger}
        snakeHeadColor="orange"
        snakeColor="darkblue"
        width="100%"
        height="100%"
        bgColor="gray"
        borderColor="red"
        innerBorderColor="gray"
        startGameText="Oyunu Başlat"
        size={10}
        shakeBoard={true}
        noWall={true}
      />
    </div>


  )
})

stories.add('App (Auto)', () => {
  return (
    <div style={{height:500, width:500}}>
      <Snake
        startOnLoad
        initialSnake={[
          { x: 2, y: 0 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },          
          { x: 2, y: 3 },
          { x: 2, y: 4 },
        ]}        
        initialDirection="down"
        width="100%"
        height="100%"
        bgColor="gray"
        borderColor="red"
        innerBorderColor="gray"
        startGameText="Restart Game"
        size={16}
        shakeBoard={true}
        noWall={true}
      />
    </div>


  )
})