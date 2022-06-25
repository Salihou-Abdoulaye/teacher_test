import React, { useEffect, useState } from "react";
import logo from "../img/logo (1).png";
import circle_2 from "../img/number-circle-two-thin-svgrepo-com.svg";
import circle_3 from "../img/number-circle-three-thin-svgrepo-com.svg";
import image_layout from "../img/auth.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Formulaire from "./Formulaire";

//Layout le composant principal
const Layout = () => {

  return (
    <div className="flex md:overflow-hidden box-border">
      {/* cette div constitue la div de gauche dans laquelle est repertorier les étapes de l'application */}
      <div className="w-1/4 bg-gray-200 h-screen hidden md:block text-md xl:text-xl lg:overflow-hidden">
        <div className="mt-4 mx-10 ">
          <img src={logo} alt="logo" className=" w-32" />
        </div>
        <div className=" mt-20 mx-auto lg:text-lg text-sm   space-y-4 text-blue-600 text-bold ">
          <div className="flex space-x-2 text-center w-3/4 mx-auto ">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 text-green-400"
            />
            <p className="text-gray-600">Quelle matière ?</p>
          </div>
          <div className="flex space-x-2 text-center w-3/4 mx-auto ">
            
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 text-green-400"
            />
            <p className="text-gray-600">Quelle classe ?</p>
          </div>
          <div className="flex space-x-2 text-center w-3/4 mx-auto ">
            
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 text-green-400"
            />
            <p className="text-gray-600">Domicile ou à distance ?</p>
          </div>
          <div className="flex space-x-2 text-center w-3/4 mx-auto ">
            
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 text-green-400"
            />
            <p className="text-gray-600">Quel type de cours ?</p>
          </div>
          <div className="flex space-x-2 text-center w-3/4 mx-auto ">
            
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-6 text-green-400"
            />
            <p className="text-gray-600">A qui s'adresse le cours ?</p>
          </div>
          
          <div className="flex space-x-2 w-3/4 mx-auto">
            
            <div className="rounded-2xl border-2 w-8 h-8 border-blue-600">
              <p className="m-auto text-sm font-bold text-center mt-1 text-blue-600">6</p>
            </div>
            <p className="">Presque fini !</p>
          </div>
        </div>
        <div>
          <img
            src={image_layout}
            alt=""
            className=" w-40 mt-32 mx-auto"
          />
        </div>
      </div>
      {/* Appel du composant formulaire */}
        <Formulaire/>
    </div>
  );
};

export default Layout;
