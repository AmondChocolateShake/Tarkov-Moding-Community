import { endpoint } from "../../Redux_Module/Types";



class FetchAPI{
    private endpoint:string="";
    private temp:object={};

    constructor(endpoint:string){
        this.endpoint=endpoint;
    }

    public fetchData(){
        
    }


    //fetch perfect image data of guns from API endpoint
    public getPresetListOfGuns(){
        

        fetch(this.endpoint,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({query:`{
                items(categoryNames:Weapon,type:preset){
                    id
                    name
                    image8xLink
                }
            }`})
        })
        .then(res=>res.json())
        .then(data=> this.temp=data);
    }
}


export const fetching=new FetchAPI(endpoint);

