interface Product {
  id: number;
  title: string;
}

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading, error }) => {
  if(loading) return <div>Is Loading...</div>;
  if(error) return <div>Error loading products. Please try again later.</div>;

  return (
    <>
      <h2>Products List</h2>
      {
        products.length > 0 ? (products.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))) : (
        <div>No products available.</div>
      )
    }
    </>
  )
}
 

export default ProductList