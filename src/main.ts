import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  // Swagger API Init
  const config = new DocumentBuilder()
    .setTitle('Openbook Tester API')
    .setDescription('Openbook Tester API')
    .setVersion('1.0')
    .addTag('openbook')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // >>>>>>>> Exceptional to bypass CORS (!!!!! Not Production Friendly !!!!)
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  // Exceptional to bypass CORS (!!!!! Not Production Friendly !!!!) <<<<<<<<

  await app.listen(process.env.PORT || 80);
}
bootstrap();
