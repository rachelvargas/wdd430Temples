export class Temple {
    constructor (
        public _id: string,
        public id: string,       
        public name: string,
        public address:string,
        public phone: string,
        public imageUrl: string,
        public group: Temple[]
    ) { }

}