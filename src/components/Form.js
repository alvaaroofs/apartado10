//Crear forms en paginas web:
//Un form es un conjunto de inputs para obtener datos del propio usuario;
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
//Con el useForm, podremos generar muchas cosas diferentes relacionadas con los forms

import * as yup from 'yup';
//Con este import, y el *, estaremos importando todas las cosas de la libreria de yup en este caso (instalada previamente con el comando: npm install react-hook-form yup)
//Con yup, vamos a validar la informacion que vamos a añadir en los forms.

export const Form = () => {
    //Con este componente "schema" indicaremos como queremos los datos; En el caso de required(), es porque le obligamos a meterlo.
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is Required!"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "The confirm password is not the same as the previous password!") //Con esta parte, decimos que si o si tiene que ser el password anterior
            .required(),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        //Instalaremos otro paquete con el comando: npm install @hookform/resolvers y la declaramos en la zona de los imports arriba
        resolver: yupResolver(schema),
        //De esta forma, indicaremos que la forma de nuestro form, sera la de la funcion schema (con todas las restricciones que hemos añadido en cada campo)
    });

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
            <p>{errors.fullName?.message}</p>
            <input type="text" placerholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placerholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placerholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placerholder="Confirm Password..." {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
};

//Los errores salen en rojo, porque en el app.css hemos creado un .p que basicamente lo convierte el color rojo