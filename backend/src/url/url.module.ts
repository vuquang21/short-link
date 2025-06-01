import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlController } from './controller/url.controller';
import { UrlService } from './services/url.service';
import { Url } from '../typeorm/url.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    controllers: [UrlController],
    providers: [UrlService],
})
export class UrlModule {}
