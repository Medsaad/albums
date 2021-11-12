import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Album from '../entity/album.model';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(Album) private albumRepo: Repository<Album>,
    ) {}


    async getAlbums() {
        return this.albumRepo.find();
    }


    async createAlbum(data: any) {
        const album = new Album();
        album.title = data.title;
        album.releasedAt = data.releasedAt;
        album.artist = data.artist;

        return await this.albumRepo.save(album);
    }
}
