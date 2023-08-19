import ProductImage from "./ProductImage";

const ProductCard = () => {
  const product = {
    alt: "hello",
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  };
  return (
    <div className="w-full h-full relative flex flex-col min-h-fit">
      <div className="w-full h-3/4 absolute"><ProductImage {...product} /></div>
      <div className="w-full h-1/4 absolute bottom-0 p-1">
        <div className="h-1/3 text-lg text-ellipsis whitespace-nowrap overflow-hidden">Nike</div>
        <div className="h-1/3 text-sm text-ellipsis whitespace-nowrap overflow-hidden">ProductName Could Be anything ProductName Could Be anything</div>
        <div className="h-1/3 text-xs whitespace-nowrap overflow-hidden flex gap-2">
          <span>Rs.786</span>
          <span className="line-through">Rs.900</span>
          <span>(10% off)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
