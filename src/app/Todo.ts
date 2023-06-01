export class Todo{
    sno!: number;
    title!: string
    desc! : string
    active : boolean

    constructor() {       

        this.active = false; // Initialize the property in the constructor
      }
} 