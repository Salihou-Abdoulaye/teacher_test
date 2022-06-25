import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faComments,
  faGraduationCap,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far, faStar);
//le composant teacherCard
const TeacherCard = ({data}) => {
  return (
    <>
      <div className=" mt-14 ">
        <div className="md:w-80 w-72 shadow-lg rounded-2xl bg-blue-100">
          <img
            className="mb-3 border w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
            src={data.image_libre}
            alt={data.name}
          />
          <h5 className="md:text-lg text-sm truncate text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
          {data.name}
          </h5>
          <div className="text-yellow-500 md:text-lg text-sm -translate-y-8 md:-translate-y-10 text-center">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon={["far", "star"]} />
          </div>
          <p className="text-center md:-translate-y-10 -translate-y-8 text-xs text-gray-500">
            {data.time}
          </p>
          <div className="space-y-2 md:text-sm text-xs md:-translate-y-8 -translate-y-6 text-blue-700 font-semibold mx-8">
            <div className="flex space-x-2  ">
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>{data.level}</p>
            </div>
            <div className="flex space-x-2 truncate">
              <FontAwesomeIcon icon={faComments} />
              <p>{data.language}</p>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faCircleCheck} />
              <p>{data.graduation}</p>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{data.location}</p>
            </div>
            <div className="space-y-1">
              <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                Description
              </h3>
              <p className="md:text-sm text-xs text-gray-500 text-justify">
               {data.text}
              </p>
            </div>
          </div>

          <div class="flex space-x-2 justify-center">
            <button
              type="button"
              class="translate-y-4 inline-block md:px-6 py-2.5 px-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-36"
            >
              Choisir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherCard;
