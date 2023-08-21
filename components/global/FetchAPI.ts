


class FetchAPI{
    private endpoint:string;


    constructor(endpoint:string){
        this.endpoint=endpoint;
    }

    public fetchData(){

    }

    public getListOfGuns(){
        fetch(this.endpoint,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({query:`{
                items(){
                    id
                    name
                    image
                }
            }`})

        })

    }


}