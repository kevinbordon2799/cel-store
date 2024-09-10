import { Product } from "@/types/store.types";
import Link from "next/link";
import { ProductDb } from "./lib/products-db";

function setProductLinks(productsData: Product[]) {
    return productsData.map((product) => {
        return (
            <ul key={`id-${product.id}`}>
                <Link href={`/tienda/${product.id}`}>{product.title}</Link>
            </ul>
        );
    });
}

export default function StorePage() {
    return (
        <div>
            <h1>Tienda</h1>
            <br />
            <br />
            <ul>{setProductLinks(ProductDb.getData())}</ul>
        </div>
    );
}
