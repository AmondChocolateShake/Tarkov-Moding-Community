


export class GunService {
    

    toGetPreset(){
        const query=`{
            items(categoryNames:Weapon,type:preset){
              name
              shortName
              id
            }
          }`

        fetch('https://api.tarkov.dev/graphql',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query:query})
            })
            .then(res=>res.json)
            .then(data=>{return data})
            .catch(err=>{ console.error('Error : ',err)});
    }
}