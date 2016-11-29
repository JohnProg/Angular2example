declare module Example.Models {
    export interface IProduct {
        id: number;
        name: string;
        code: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
    }
}