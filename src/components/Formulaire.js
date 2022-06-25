import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Formulaire = () => {
  //cette variable contient le regex de verification du numéro de téléphone  
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  //cette variable contient le regex de verification du mot de passe
  const passwordRegex =
    /^(?=.*\d{2,})(?=.*[$-/:-?{ -~!"^_`\[\]]{1,})(?=.*\w).{8,}$/;
  //le shema de validation du formulaire   
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Veuillez entrer votre prenom")
      .min(3, "Votre prenom doit avoir au moins 3 caractères")
      .max(50, "Votre prenom ne doit pas dépasser 50 caractères"),
    last_name: Yup.string()
      .required("Veuillez entrer votre nom")
      .min(3, "Votre nom doit avoir au moins 3 caractères")
      .max(50, "Votre nom ne doit pas dépasser 50 caractères"),
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Veuillez entrer votre adresse email"),
    phone: Yup.string()
      .required("Veuillez entrer votre numéro de téléphone")
      .matches(phoneRegExp, "Numéro de téléphone invalide"),
    password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(
        passwordRegex,
        "Votre mot de passe doit avoir au moins 2 chiffres, 1 caractère spécial et une longueur minimale de  8"
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Le mot de passe ne correspond pas"
    ),
  });
  
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;
 //cette fonction permet d'envoyer les données dans mon console.log
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
 //ce state permet d'afficher ou de cacher le mot de passe
  const [passwordShown, setPasswordShown] = useState(false);
   //ce state permet d'afficher ou de cacher le confirme mot de passe
  const [passwordShown2, setPasswordShown2] = useState(false);
  //cette fonction permet d'afficher ou de cacher le mot de passe
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  //cette fonction permet d'afficher ou de cacher le confirme mot de passe
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  return (
    <div className="md:w-3/4 h-screen">
        <p className="lg:text-sm text-xs m-4 text-right">
          Vous rencontrez des difficultés ?{" "}
          <span className="lg:text-sm text-right text-blue-600">
            Obtenez de l'aide
          </span>
        </p>
    <div className="w-3/4 lg:mt-10 h-screen mx-auto ">
      <div className="space-y-2 mb-4">
        <h5 className="lg:text-2xl text-blue-800 font-bold text-justify">Presque fini !</h5>
        <p className="lg:text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          animi suscipit voluptatum voluptatibus ullam quas ea facere explicabo
          beatae nihil dolorum corrupti placeat quaerat pariatur, incidunt,
          veritatis tempore aut. Natus.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <div className= {errors.name ?"bg-blue-50 border border-red-400 text-red-400 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-0 focus:border-red-400 focus:border-1"
                :"bg-blue-50 border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-1"}>
                <label
                forHtml="first_name"
                className={errors.name? 
                    "block mb-2 text-sm font-medium text-red-400"
                    :"block mb-2 text-sm font-medium text-gray-900"}
                >
                Prénom
                </label>
                <input
                type="text"
                id="first_name"
                className={errors.name? "bg-blue-50 text-red-400 text-sm focus:outline-none focus:ring-0 w-full focus:border-1":
                  "bg-blue-50 text-gray-900 text-sm focus:outline-none focus:ring-0 w-full focus:border-1"}
                {...register("name")}
                placeholder="John"
                />
            </div>
            <small className=" text-red-400  ">
                {errors.name?.message}
            </small>
          </div>
          <div>
            <div className= {errors.last_name ?"bg-blue-50 border border-red-400 text-red-400 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-0 focus:border-red-400 focus:border-1"
                :"bg-blue-50 border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-1"}>
                <label
                forHtml="last_name"
                className={errors.last_name? 
                    "block mb-2 text-sm font-medium text-red-400"
                    :"block mb-2 text-sm font-medium text-gray-900"}
                >
                Nom
                </label>
                <input
                type="text"
                id="last_name"
                className={errors.last_name? "bg-blue-50 text-red-400 text-sm focus:outline-none focus:ring-0 w-full focus:border-1":
                  "bg-blue-50 text-gray-900 text-sm focus:outline-none focus:ring-0 w-full focus:border-1"}
                {...register("last_name")}
                placeholder="Michelle"
                />
            </div>
            <small className=" text-red-400  ">
                {errors.last_name?.message}
            </small>
          </div>
          <div>
            <div className= {errors.email ?"bg-blue-50 border border-red-400 text-red-400 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-0 focus:border-red-400 focus:border-1"
                :"bg-blue-50 border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-1"}>
                <label
                forHtml="email"
                className={errors.email? 
                    "block mb-2 text-sm font-medium text-red-400"
                    :"block mb-2 text-sm font-medium text-gray-900"}
                >
                Adresse email
                </label>
                <input
                type="text"
                id="email"
                className={errors.email? "bg-blue-50 text-red-400 text-sm focus:outline-none focus:ring-0 w-full focus:border-1":
                  "bg-blue-50 text-gray-900 text-sm focus:outline-none focus:ring-0 w-full focus:border-1"}
                {...register("email")}
                placeholder="johnmichelle@gmail.com"
                />
            </div>
            <small className=" text-red-400  ">
                {errors.email?.message}
            </small>
          </div>
          <div>
            <div className= {errors.phone ?"bg-blue-50 border border-red-400 text-red-400 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-0 focus:border-red-400 focus:border-1"
                :"bg-blue-50 border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-1"}>
                <label
                forHtml="phone"
                className={errors.phone? 
                    "block mb-2 text-sm font-medium text-red-400"
                    :"block mb-2 text-sm font-medium text-gray-900"}
                >
                Numéro portable
                </label>
                <input
                type="text"
                id="phone"
                className={errors.phone? "bg-blue-50 text-red-400 text-sm focus:outline-none focus:ring-0 w-full focus:border-1":
                  "bg-blue-50 text-gray-900 text-sm focus:outline-none focus:ring-0 w-full focus:border-1"}
                {...register("phone")}
                placeholder="07 88 99 65 41"
                />
            </div>
            <small className=" text-red-400  ">
                {errors.phone?.message}
            </small>
          </div>
          <div>
            <div className= {errors.password ?"bg-blue-50 border flex  border-red-400 text-red-400 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-0 focus:border-red-400 focus:border-1"
                :"bg-blue-50 border-gray-300 flex text-gray-900 text-sm rounded-sm w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-1"}>
                <div className="w-5/6">
                    <label
                    forHtml="password"
                    className={errors.password? 
                        "block mb-2 text-sm font-medium text-red-400"
                        :"block mb-2 text-sm font-medium text-gray-900"}
                    >
                    Mot de passe
                    </label>
                    <input
                    type={passwordShown ? "text" : "password"}
                    id="password"
                    className={errors.password? "bg-blue-50 text-red-400 text-sm focus:outline-none focus:ring-0 w-full focus:border-1":
                    "bg-blue-50 text-gray-900 text-sm focus:outline-none focus:ring-0 w-full focus:border-1"}
                    {...register("password")}
                    placeholder="Password"
                    />
                </div>
                <div className="m-auto">
                {passwordShown ? <FontAwesomeIcon icon={faEyeSlash}  onClick={togglePasswordVisiblity}/>
                :<FontAwesomeIcon icon={faEye}  onClick={togglePasswordVisiblity}/>    
            }
                </div>
            </div>
            <small className=" text-red-400  ">
                {errors.password?.message}
            </small>
          </div>
          <div>
          <div className= {errors.confirmPassword ?"bg-blue-50 border flex  border-red-400 text-red-400 text-sm rounded-md w-full p-2.5 focus:outline-none focus:ring-0 focus:border-red-400 focus:border-1"
                :"bg-blue-50 border-gray-300 flex text-gray-900 text-sm rounded-sm  w-full p-2.5 focus:outline-none focus:ring-0 focus:border-gray-200 focus:border-1"}>
                <div className="w-5/6">
                    <label
                    forHtml="confirmPassword"
                    className={errors.confirmPassword? 
                        "block mb-2 text-sm font-medium text-red-400"
                        :"block mb-2 text-sm font-medium text-gray-900"}
                    >
                    Confirmer le mot de passe
                    </label>
                    <input
                    type={passwordShown2 ? "text" : "password"}
                    id="password"
                    className={errors.confirmPassword? "bg-blue-50 text-red-400 text-sm focus:outline-none focus:ring-0 w-full focus:border-1":
                    "bg-blue-50 text-gray-900 text-sm focus:outline-none focus:ring-0 w-full focus:border-1"}
                    {...register("confirmPassword")}
                    placeholder="Confirm password"
                    />
                </div>
                <div className="m-auto">
                {passwordShown2 ? <FontAwesomeIcon icon={faEyeSlash}  onClick={togglePasswordVisiblity2}/>
                :<FontAwesomeIcon icon={faEye}  onClick={togglePasswordVisiblity2}/>    
            }
                </div>
            </div>
            <small className=" text-red-400  ">
                {errors.confirmPassword?.message}
            </small>
          </div>
        </div>

        <div className="flex  mt-20 justify-between md:w-full mx-auto">
          <div class="flex space-x-2 justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className=" translate-y-4 md:text-sm text-xs text-gray-700 font-medium leading-tight uppercase hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out md:w-36 w-24"
            >
              Precédent
            </button>
          </div>
          <div class="flex space-x-2 justify-center">
            <button
              type="Submit"
              class="translate-y-4 inline-block md:px-4 px-2 md:py-2 py-1 border-2 md:text-sm text-xs  border-blue-600 text-blue-600 font-medium leading-tight uppercase rounded-full hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out md:w-36 w-24 "
            >
              Suivant
            </button>
          </div>
        </div>

      </form>
    </div>
    </div>
  );
};

export default Formulaire;
