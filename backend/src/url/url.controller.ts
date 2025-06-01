import { Controller, Post, Body, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlResponseDto } from './dto/url-response.dto';
import { Response } from 'express';
import { UrlService } from './services/url.service';

@Controller('url')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @Post()
    async create(@Body() createUrlDto: CreateUrlDto): Promise<UrlResponseDto> {
        const url = await this.urlService.createShortUrl(createUrlDto);
        return {
            id: url.id,
            shortCode: url.shortCode,
            originalUrl: url.originalUrl,
            visitCount: url.visitCount,
            createdDate: url.createdDate,
        };
    }

    @Get(':shortCode')
    async redirect(@Param('shortCode') shortCode: string, @Res() res: Response) {
        const url = await this.urlService.findByShortCode(shortCode);
        await this.urlService.incrementVisitCount(shortCode);
        return res.redirect(HttpStatus.MOVED_PERMANENTLY, url.originalUrl);
    }

    @Get(':shortCode/stats')
    async getStats(@Param('shortCode') shortCode: string): Promise<UrlResponseDto> {
        const url = await this.urlService.getStats(shortCode);
        return {
            id: url.id,
            shortCode: url.shortCode,
            originalUrl: url.originalUrl,
            visitCount: url.visitCount,
            createdDate: url.createdDate,
        };
    }
}