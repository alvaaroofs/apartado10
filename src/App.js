import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";


import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


//Para empezar, instalaremos la siguiente biblioteca: npm install @tanstack/react-query; y lo importamos en la zona de los imports
//El cliente para el proveedor que declaramos en la linea 12, es el propio cliente


//Esta es una de las multiples configuraciones que se puede añadir; el refetchOnWindowFocus, hara ese update automatico de datos cada vez que
//cambiemos de pagina (estando con valor true) o no lo hara (estando con valor false)
function App() {
  const client = new QueryClient({defaultOptions:{
      queries: {
        refetchOnWindowFocus: false,
      
      }
  }
  });
  return (
  <div className="App">
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </QueryClientProvider>
    </div>
  );
}

export default App;
