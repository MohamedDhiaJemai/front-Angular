export class Utilisateur{

    public id : number;
    public username : string;
    public password : string;
    public nom : string;
    public prenom : string;
    public telephone : string;
    public email : string;
    public idccms : string;
    public matricule : string;

    constructor(id:number, username:string,password:string, nom:string,prenom:string,
        email:string,idccms:string,matricule:string){

        this.id=id;
        this.username=username;
        this.password=password;
        this.nom=nom;
        this.prenom=prenom;
        this.telephone=this.telephone;
        this.email=email;
        this.idccms=idccms;
        this.matricule=matricule;
        
    }


}