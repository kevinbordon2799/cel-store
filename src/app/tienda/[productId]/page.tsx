import { Product } from "@/types/store.types";
import { ProductDb } from "../lib/products-db";
import { notFound } from "next/navigation";

interface Props {
    params: {
        productId: string;
    };
}

export default function ProductInfoPage(props: Props) {
    const { params } = props;
    const product: Product | undefined = ProductDb.getById(params.productId);
    const isProductNotFound: boolean = !product;

    if (isProductNotFound) {
        return notFound();
    }

    return (
        <div>
            <h2>{product?.title}</h2>
            <p>
                <b>Price:</b>${product?.price}
            </p>
            <p>
                <b>Details:</b>
            </p>
            <p>{product?.details}</p>
        </div>
    );
}
