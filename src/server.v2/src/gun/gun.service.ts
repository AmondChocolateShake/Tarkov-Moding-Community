


export class GunService {
    

    toGetPreset(){
        const query=`{
            items() {
                id
                name
                shortName
            }
        }`

        fetch('https://api.tarkov.dev/graphql',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify()
            })
    }
}