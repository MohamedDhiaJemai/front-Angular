export class Role{

    public id : number;
    public role : string;
    public description : string;

    constructor(id:number, role:string, description:string){

        this.id=id;
        this.role=role;
        this.description=description;
        
    }
}