import { Controller,Get, Post, Body, Res, Param } from "@nestjs/common";
import {Response} from 'express'
import { GunService } from "./gun.service";
import { GunId } from "./gun.type";


@Controller('guns')
export class GunController {
    constructor(private readonly gunService:GunService){};

    @Get('')
    async getListOfPreset(@Res() res:Response){
        const guns=await this.gunService.getPresets();
        console.log(guns);
        res.status(200).json(guns);
    }

    @Get(':id')
    async getItemDataByid(@Param('id') gunId:string ){
        console.log(gunId);
        const id=gunId;
        console.log(await this.gunService.getItemDataById(id));
    }

}