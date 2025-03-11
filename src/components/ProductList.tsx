interface Product {
  id: number;
  title: string;
}

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
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