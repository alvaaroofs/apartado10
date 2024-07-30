//Crear forms en paginas web:
//Un form es un conjunto de inputs para obtener datos del propio usuario;
import { useForm } from "react-hook-form";
//Con el useForm, podremos generar muchas cosas diferentes relacionadas con los forms

import * as yup from 'yup';
//Con este import, y el *, estaremos importando todas las cosas de la libreria de yup en este caso (instalada previamente con el comando: npm install react-hook-form yup)
//Con yup, vamos a validar la informacion que vamos a añadir en los forms.

export const Form = () => {
    const {register, handleSubmit } = useForm();

    
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        
    })



    //Con onSubmit, tiraremos un mensaje en este caso cuando se le de clic en el boton submit
    const onSubmit = (data) => {
        console.log(data);
    };

    //<form onSubmit={handleSubmit(onSubmit)}> con esta linea, cuando enviemos el formulario, hara un handleSubmit a la funcion que hemos creado previamente con el console.log


    //Para registrar como un objeto los inputs, añadiremos en cada uno de los inputs lo siguiente:
    //(Codigo previo): <input type="text" placerholder="Full Name..."/>
    //(Codigo posterior): <input type="text" placerholder="Full Name..." {...register("fullName")}/>
    //Lo que esta entre comillas, sera el nombre que le vamos a atribuir a ese atributo del objeto;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placerholder="Full Name..." {...register("fullName")}/>
            <input type="text" placerholder="Email..." {...register("email")}/>
            <input type="number" placerholder="Age..." {...register("age")}/>
            <input type="password" placerholder="Password..." {...register("password")}/>
            <input type="password" placerholder="Confirm Password..." {...register("confirmPassword")}/>
            <input type="submit" />
        </form>
    );
};