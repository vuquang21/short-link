import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Url } from '../entities/url.entity';
import { CreateUrlDto } from '../dto/create-url.dto';
import { customAlphabet } from 'nanoid';
import { Url } from 'src/typeorm/url.entity';

@Injectable()
export class UrlService {
    private generateShortCode = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);

    constructor(
        @InjectRepository(Url)
        private urlRepository: Repository<Url>,
    ) {}

    async createShortUrl(createUrlDto: CreateUrlDto): Promise<Url> {
        const shortCode = this.generateShortCode();
        const url = this.urlRepository.create({
            originalUrl: createUrlDto.originalUrl,
            shortCode,
        });
        return this.urlRepository.save(url);
    }

    async findByShortCode(shortCode: string): Promise<Url> {
        return this.urlRepository.findOneOrFail({ where: { shortCode } });
    }

    async incrementVisitCount(shortCode: string): Promise<void> {
        await this.urlRepository.increment({ shortCode }, 'visitCount', 1);
    }

    async getStats(shortCode: string): Promise<Url> {
        return this.urlRepository.findOneOrFail({ where: { shortCode } });
    }
} 