import Categories from "@/components/categories";
import ProductsList from "@/components/products-list";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans min-h-full">
      <Slider />
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <ProductsList />
      </div>
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-8">Our Categories</h1>
        <Categories />
      </div>
    </div>
  );
}
