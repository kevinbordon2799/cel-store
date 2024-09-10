import { Product } from "@/types/store.types";

export class ProductDb {
    static productsDb: Product[] = [
        { id: "pr-1", title: "Samsung A32 128GB", price: 1000, details: "" },
        { id: "pr-2", title: "Samsung A22 128GB", price: 2000, details: "" },
        { id: "pr-3", title: "Samsung A02 64GB", price: 3000, details: "" },
        { id: "pr-4", title: "Samsung A03 32GB", price: 4000, details: "" }
    ];

    static getData(): Product[] {
        return this.productsDb;
    }

    static getById(id: string): Product | undefined {
        return this.productsDb.find(product => id === product.id);
    }
}
