import { GunId, types } from "./gun.type";

export class GunService {

    /** This function is for fetch. q parameter takes string of graphQL query */
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

    /**select item data by item id */
    async getItemDataById(id:string){
        const query=this.getQuery("ids:\""+id+"\"","name","id");
        console.log(query);

        let result;
        result=await this.fetchQuery(query);
        result=result.data.items;
        return result;
    }

    /** this function returns gun preset object lists */
    async getPresets():Promise<object>{
        // const query=`{
        //     items(categoryNames:Weapon,type:preset){
        //       name
        //       shortName
        //       id
        //     }
        //   }`;
        
        const query=this.getQuery(types.preset,"name","id","inspectImageLink");
        let result;
        result=await this.fetchQuery(query);
        // console.log(typeof(result));
        result=result.data.items;
        return result;
    }

    
}