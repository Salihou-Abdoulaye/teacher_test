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
import image from "../img/imglibre.jpg";

library.add(far, faStar);

//le composant teacherCard
const TeacherCard = ({data}) => {
//Cette fonction nous permet de formater la date et l'heure
const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString('FR-fr', {
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
    })
    return newDate
  } 
  return (
    <>
      <div className=" mt-14 ">
        <div className="md:w-80 w-72 shadow-lg rounded-2xl flex-shrink-0 bg-blue-100">
          <img
            className="mb-3 border w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
            src={ data.avatar == null ? image : data.avatar }
            alt={data.last_name}
          />
          <h5 className="md:text-lg text-sm truncate text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
          {data.first_name} {data.last_name}
          </h5>
          <div className="text-yellow-500 md:text-lg text-sm -translate-y-8 md:-translate-y-10 text-center">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon={["far", "star"]} />
          </div>
          <p className="text-center md:-translate-y-10 -translate-y-8 text-xs text-gray-500">
            {dateFormater(data.since)}
          </p>
          <div className="space-y-2 md:text-sm text-xs md:-translate-y-8 -translate-y-6 text-blue-700 font-semibold mx-8">
            <div className="flex space-x-2  ">
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>HEC, 1ère année</p>
            </div>
            <div className="flex space-x-2 truncate">
              <FontAwesomeIcon icon={faComments} />
              <p>{data.slug}</p>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faCircleCheck} />
              <p>Diplome verifié</p>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Paris</p>
            </div>
            <div className="space-y-1">
              <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                Description
              </h3>
              <p className="md:text-sm text-xs text-gray-500 text-justify">
               {data.about == null ? <p className="md:text-sm text-xs text-gray-500 text-justify line-clamp-3">
                        Debitis molestias repudiandae maxime non, amet saepe maiores
                        harum. Doloribus repellendus voluptatum error. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam quo facilis possimus. Facere numquam quas asperiores nemo soluta inventore enim, in dicta voluptatem? Dolorum perferendis odit vero dolores illum!
                    </p> : <p className="md:text-sm text-xs text-gray-500 text-justify line-clamp-3">
                        {data.about}
                    </p>}
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
