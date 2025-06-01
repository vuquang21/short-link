import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from 'src/typeorm/url.entity';
import { UrlController } from './controller/url.controller';
import { UrlService } from './services/url.service';

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    controllers: [UrlController],
    providers: [UrlService],
})
export class UrlModule {}
