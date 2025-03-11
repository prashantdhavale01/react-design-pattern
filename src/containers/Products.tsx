import {useState, useEffect} from 'react'
import ProductList from '../components/ProductList';
import withLoading from '../components/HOC';

const ProductListWithLoading = withLoading(ProductList);

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async() => {
    setLoading(true);
    try{
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      if(!json.products) return;
      setProducts(json.products);
    }catch(err){
      console.log(err);
      setError(true);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  // return <ProductList products={products} loading={loading} error={error} /> 
  return <ProductListWithLoading products={products} loading={loading} error={error} />; //HOC
}

export default Products