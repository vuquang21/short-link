import {
    Injectable,
    ConflictException,
    NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUrlDto } from "./dto/create-url.dto";
import { Base62 } from "../common/utils/base62";
import { Repository } from "typeorm/repository/Repository";
import { Url } from "src/typeorm/url.entity";

@Injectable()
export class UrlService {
    constructor(
        @InjectRepository(Url)
        private urlRepository: Repository<Url>
    ) {}

    async createShortUrl(createUrlDto: CreateUrlDto): Promise<Url> {
        const { originalUrl } = createUrlDto;

        // Validate URL
        try {
            new URL(originalUrl);
        } catch {
            throw new ConflictException("Invalid URL format");
        }

        // Check if URL already exists
        const existingUrl = await this.urlRepository.findOne({
            where: { originalUrl },
        });

        if (existingUrl) {
            return existingUrl;
        }

        // Generate short code
        const url = new Url();
        url.originalUrl = originalUrl;
        url.visitCount = 0;

        const savedUrl = await this.urlRepository.save(url);
        url.shortCode = Base62.encode(savedUrl.id);

        return this.urlRepository.save(url);
    }

    async findByShortCode(shortCode: string): Promise<Url> {
        const url = await this.urlRepository.findOne({ where: { shortCode } });
        if (!url) {
            throw new NotFoundException("Short URL not found");
        }
        return url;
    }

    async incrementVisitCount(shortCode: string): Promise<void> {
        const url = await this.findByShortCode(shortCode);
        url.visitCount += 1;
        await this.urlRepository.save(url);
    }

    async getStats(shortCode: string): Promise<Url> {
        return this.findByShortCode(shortCode);
    }
}
