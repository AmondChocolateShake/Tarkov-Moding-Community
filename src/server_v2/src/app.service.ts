import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {

    async serveHTML() {
        try{
            const htmlPath = path.join(__dirname, '..', '..', 'dist', 'index.html');
            console.log(htmlPath);
            const html = await fs.promises.readFile(htmlPath, 'utf-8');
            console.log(html);
            return html;
        }catch(err){
            console.log(err);
        }
    }

    async serveJS(){
        try{
            const JSPath = path.join(__dirname, '..', '..', 'dist', 'bundle.js');
            const js = await fs.promises.readFile(JSPath, 'utf-8');
            return js;
        }catch(err){
            console.log(err);
        }

    }

}
