import { Body, Controller, Post } from '@nestjs/common';
import { CreateUrlDto } from '../dto/create-url.dto';
import { UrlService } from '../services/url.service';

@Controller('url')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @Post()
    async create(@Body() createUrlDto: CreateUrlDto): Promise<any> {
        const url = await this.urlService.createShortUrl(createUrlDto);
        return {
            id: url.id,
            shortCode: url.shortCode,
            originalUrl: url.originalUrl,
            visitCount: url.visitCount,
            createdDate: url.createdDate,
        };
    }

}