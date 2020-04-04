export class Task{
    constructor(
        // The operator '?' means that the attribute is optional
        public id?: number,
        public name?: string,
        public finished?: boolean
    ){}
}