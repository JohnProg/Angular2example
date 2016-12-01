declare module Example.Models {
    export interface IProductPost {
        name: string;
        code: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
    }
}