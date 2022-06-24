import React, { useEffect, useState } from 'react';
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
import { DataTeacherCard } from './DataTeacherCard';
import axios from 'axios';
import image_libre from "../img/imglibre.jpg";


library.add(far, faStar);

const TeacherCard = () => {
    
  const [data, setData] = useState([]);
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
    
  useEffect(() => {
    axios.get('https://www.data.gouv.fr/api/1/users').then((res)=>setData(res.data.data))
}, []);

    return (
        <div className="mx-4 overflow-x-auto overflow-y-hidden py-4 pb-10 flex space-x-4 ">
          
            {data.map((teacher, index)=>(
                <div className=" mt-14 " key={index}>
                <div  className="md:w-80 w-72 shadow-lg rounded-2xl flex-shrink-0 bg-blue-100">

                <img
                    class="mb-3 border w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
                    src={ teacher.avatar == null ? image_libre : teacher.avatar }
                    alt={teacher.last_name}
                />
                <h5 className="md:text-lg text-sm truncate text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
                {teacher.first_name} {teacher.last_name}
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
                    <p>HEC, 1ère année</p>
                    </div>
                    <div className="flex space-x-2 truncate">
                    <FontAwesomeIcon icon={faComments} />
                    <p>{teacher.slug}</p>
                    </div>
                    <div className="flex space-x-2">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p>{dateFormater(teacher.since)}</p>
                    </div>
                    <div className="flex space-x-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Paris</p>
                    </div>
                    <div className="space-y-1">
                    <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                        Description
                    </h3>
                   {teacher.about == null ? <p className="md:text-sm text-xs text-gray-500 text-justify truncate">
                        Debitis molestias repudiandae maxime non, amet saepe maiores
                        harum. Doloribus repellendus voluptatum error. 
                    </p> : <p className="md:text-sm text-xs text-gray-500 text-justify truncate">
                        {teacher.about}
                    </p>}
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
            ))}
        </div>
    );
};

export default TeacherCard;