import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
    async serveHTML() {
        const htmlPath = path.join(__dirname, '..', '..', 'dist', 'index.html');
        const html = await fs.promises.readFile(htmlPath, 'utf-8');
        return html;
    }

}
