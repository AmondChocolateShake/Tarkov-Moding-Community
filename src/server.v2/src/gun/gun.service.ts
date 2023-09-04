


export class GunService {
    

    async toGetPreset(){
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
            .then(res=>res.json)
            .then(data=>{result=data})
            .catch(err=>{ console.error('Error : ',err)});
        
        console.log(result);
    }
}