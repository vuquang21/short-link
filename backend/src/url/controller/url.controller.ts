import { Body, Controller, Post } from '@nestjs/common';
import { CreateUrlDto } from '../dto/create-url.dto';
import { UrlService } from '../services/url.service';

@Controller('api/url')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @Post()
    async create(@Body() createUrlDto: CreateUrlDto): Promise<any> {
        if (!createUrlDto) return null;
        const url = await this.urlService.createShortUrl(createUrlDto);
        return {
            id: url.id,
            shortCode: url.shortCode,
            originalUrl: url.originalUrl,
            createdDate: url.createdDate,
        };
    }

}