import { Controller,Get, Post, Body } from "@nestjs/common";
import { GunService } from "./gun.service";


@Controller('gun')
export class GunController {
    constructor(private readonly gunService:GunService){};

    @Get('AllOfGuns')
    async getListOfPreset(){
        const guns=await this.gunService.getPresets();
        console.log(guns);
    }

    @Post('select_by_id')
    async getItemDataByid(@Body id:string){

    }

}