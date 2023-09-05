import { types } from "./gun.type";

export class GunService {


    async fetchQuery(q:string){
        const query=q;
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

    /**This is a function for creating Query to get API Data from Tarkov.dev
    You may pass values of query field as a function parameter.*/
    getQuery(types:string,...fields:string[]){
        const stringfiedFields=fields.join('\n');
        const query=`{
            items(${types}){
              ${stringfiedFields}
            }
          }`

        return query;
    }

    async getItemDataById(id:string){
        const query=this.getQuery("id:"+id,"name","id");



    }


    async getPresets():Promise<object>{
        // const query=`{
        //     items(categoryNames:Weapon,type:preset){
        //       name
        //       shortName
        //       id
        //     }
        //   }`;
        
        const query=this.getQuery(types.preset,"name","id");

        let result={};
        result=this.fetchQuery(query);
        return result;
    }
}