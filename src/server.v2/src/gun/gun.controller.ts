import { Controller,Get, Post, Body, Res } from "@nestjs/common";
import {Response} from 'express'
import { GunService } from "./gun.service";
import { GunId } from "./gun.type";


@Controller('gun')
export class GunController {
    constructor(private readonly gunService:GunService){};

    @Get('allOfGuns')
    async getListOfPreset(@Res() res:Response){
        const guns=await this.gunService.getPresets();
        console.log(guns);
        res.status(200).json(guns);
    }

    @Post('select')
    async getItemDataByid(@Body() gunId){
        console.log(gunId);
        const id=gunId.id;
        console.log(await this.gunService.getItemDataById(id));
    }

}