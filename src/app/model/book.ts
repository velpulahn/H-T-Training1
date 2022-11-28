export class Book{
//     bookId:number,
//     authorId:number
//    title:string,
//    author:string,
//    publisher:string,
//    price:number,
//     publishedDate:string,
//     category:string;
//     rating:number,
//     isActive:boolean,
//     content:string
    constructor(
        public bookId:number,
        public authorId:number,
        public title:string,
        public author:string,
        public publisher:string,
        public price:number,
        public publishedDate:string,
        public category:string,
        public rating:number,
        public active:boolean,
        public content:string
    ){}
}