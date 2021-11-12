import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
    constructor(private service: AlbumService) {}

    @Get('/')
    async getAlbums() {
        return await this.service.getAlbums();
    }

    @Post('/')
    async createAlbum(
        @Body() body
    ) {
        return this.service.createAlbum(body);
    }
}
