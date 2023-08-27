import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller()
export class AppController {
  //정적 파일 서빙
  @Get()
  async getFiles(@Res() res: Response): Promise<void> {
    const htmlPath = path.join(__dirname, '..', '..', 'dist', 'index.html');

    try {
      const html = await fs.promises.readFile(htmlPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (err) {
      res.status(500).send('Internal Server Error');
      console.log('Error occured : ', err);
    }
  }

  //script 파일 서빙
  @Get('bundle.js')
  async getJSFile(@Res() res: Response): Promise<void> {
    const JSPath = path.join(__dirname, '..', '..', 'dist', 'bundle.js');

    try {
      const js = await fs.promises.readFile(JSPath, 'utf-8');
      res.setHeader('Content-Type', 'application/javascript');
      res.send(js);
    } catch (err) {
      res.status(500).send('Internal Server Error');
      console.log('Error occured : ', err);
    }
  }
}
