import { useQuery } from '@tanstack/react-query';
import Axios from "axios";


//useQuery: da un unico id para cada query que hagamos; nos ahorrara mucho tiempo y codigo, ya que hara peticiones del lado del cliente de forma sencilla.
//isLoading; cuando la pagina este cargando, con el return sacaremos el mensaje mientras se refresca la pagina
//Lo mismo con isError

//Podemos usar refetch para evitar tener que refrescar la pagina para actualizar el fetch a x pagina web distinta; esto viene muy bien con apis que proporcionan muchisima info cada poco tiempo
//(Esto ya es un poco mas de javascript; en vez de poner data como tal, podemos poner data: catData)

export const Home = () => {
    const { 
      data: catData, 
      isLoading, 
      isError, 
      refetch, 
    } = useQuery(["cat"], () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
      return <h1> Sorry, there was an error </h1>
    }

    if (isLoading) {
      return <h1> Loading . . . </h1>
    }

    return (
    <h1> 
      This is the home page and user <p>{catData?.fact}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
    );
  };
//Y en vez de decir {data?.fact}, diriamos {catData?.fact}


 //En el {data?.fact}, se mete ? para indicar que mostrara mensajes cuanto el data sea no nulo.