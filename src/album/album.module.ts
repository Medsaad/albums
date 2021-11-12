import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Album from '../entity/album.model';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Album]),
  ],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule {}
