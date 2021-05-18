import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CouresItem from "../../Component/CouresItem/CouresItem";
import "../../Scss/BackGround.scss";
export default function HomeScreen(props) {
  return (
    <div id="backGroundKNT">
      <div className="container">
        <CouresItem />
      </div>
    </div>
  );
}
