import { useEffect, useState } from "react";
import { Marcas } from "./components/Marcas";
import { Paises } from "./components/Paises";
import { Categorias } from "./components/Categorias";
import { Generos } from "./components/Generos";
import { Nav } from "./components/nav/Nav";

function App() {
  const [products, setProducts] = useState([]);
  const [pais, setPais] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";
  const PAIS_ENDPOINT = "pais";

  
  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Marcas />
      <Paises />
      <Categorias />
      <Generos />
      <Nav />
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
        ))}
      <h1>Hola mundo react</h1>
      {pais.map((pais: any) => (
        <div key={pais.id}>{pais.name}</div>
      ))}
      
    </div>
  );
}

export default App;
