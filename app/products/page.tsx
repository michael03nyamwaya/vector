// app/products/page.tsx
import ProductList from "../components/ProductList"

const ProductsPage = async({searchParams}:{searchParams:Promise<{category:string}>}) => {
  const category = (await searchParams).category
  return (
    <div className="pt-4"> {/* Added some padding at top */}
      <ProductList category={category} showHeader={false} />
    </div>
  )
}

export default ProductsPage