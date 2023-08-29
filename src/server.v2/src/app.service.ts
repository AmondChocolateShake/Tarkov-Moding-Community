import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {

    async serveHTML() {
        try{
            const htmlPath = path.join(__dirname, '..', '..', 'dist', 'index.html');
            const html = await fs.promises.readFile(htmlPath, 'utf-8');
            return html;
        }catch(err){
            console.log(err);
        }
    }

    async serveJS(){


    }

}
