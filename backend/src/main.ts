import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalFilters(new HttpExceptionFilter());
    const allowedOrigins = ['http://localhost:3000', 'https://yourapp.com'];

    app.enableCors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true); // Allow the request
        } else {
          callback(new Error('Not allowed by CORS')); // Block the request
        }
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
      credentials: true,
    });

    const port = process.env.PORT ?? 3200;
    await app.listen(port);
    // Enable CORS with default settings
    console.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${process.env.PORT ?? 3200} is already in use. Please try a different port by setting the PORT environment variable.`);
      process.exit(1);
    } else {
      console.error('Failed to start application:', error);
      process.exit(1);
    }
  }
}

bootstrap();
