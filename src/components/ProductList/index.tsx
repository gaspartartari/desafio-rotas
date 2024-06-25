import { ProductDTO } from "../../models/product";

type Props = {
    product:ProductDTO;
}

export default function ProductList ({ product}: Props) {

    return (
        <>
        <p>{product.name}</p>
        </>
    )
}