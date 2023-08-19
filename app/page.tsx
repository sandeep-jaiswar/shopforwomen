import FilterSidebar from "@/components/molecules/FilterSidebar";
import ProductContainer from "@/components/molecules/ProductContainer";

export const dynamic = "force-dynamic";

export default async function Index() {
  return (
    <div className="flex w-full justify-between">
      <div className="w-1/4 p-3">
        <FilterSidebar />
      </div>
      <div className="w-3/4 p-3">
        <ProductContainer />
      </div>
    </div>
  );
}
