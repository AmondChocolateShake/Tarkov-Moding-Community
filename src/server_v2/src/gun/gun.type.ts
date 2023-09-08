export const types={
    preset:'categoryNames:Weapon,type:preset',
    ammo:'categoryNames:Ammo'
}

export class GunId{
    readonly gunId:string
}

export interface DataForm{
    data:{
        item:object[]
    }
}