


export class GunService {
    

    //This is a function for creating Query to get API Data from Tarkov.dev
    //You may pass values of query field as a function parameter.
    //
    getQuery(types:string[],fields:string[]){
        
    }

    async getItemDataById(){


    }


    async getPresets():Promise<object>{
        const query=`{
            items(categoryNames:Weapon,type:preset){
              name
              shortName
              id
            }
          }`;
        
        let result={};

        await fetch('https://api.tarkov.dev/graphql',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query:query})
            })
            .then(res=>res.json())
            .then(data=>{result=data})
            .catch(err=>{ console.error('Error : ',err)});
        
        return result;
        
    }
}