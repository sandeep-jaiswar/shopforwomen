import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface ProductImageType {
    src: string;
    alt: string;
}

const ProductImage =({src = "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", alt="img"}: ProductImageType) =>{
    return(
        <AspectRatio ratio={12/16}>
            <Image src={src} alt={alt} className="absolute" fill={true} objectFit="cover" /> 
        </AspectRatio>
    )
}

export default ProductImage
