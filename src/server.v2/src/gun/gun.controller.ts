import { Controller,Get, Post, Body } from "@nestjs/common";
import { GunService } from "./gun.service";
import { GunId } from "./gun.type";


@Controller('gun')
export class GunController {
    constructor(private readonly gunService:GunService){};

    @Get('AllOfGuns')
    async getListOfPreset(){
        const guns=await this.gunService.getPresets();
        console.log(guns);
    }

    @Post('select')
    async getItemDataByid(@Body() gunId:GunId){
        console.log(gunId);
        const id=gunId.gunId;
        console.log(await this.gunService.getItemDataById(id));

    }

}