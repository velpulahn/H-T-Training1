export class OrderInfo{

    constructor(
        public paymentId:number,
        public userId:number,
        public description:string,
        public paymentDate:string,
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
        public content:string,
        public userName:string,
        public emailId:string,
        public roles:string
    ){}
}