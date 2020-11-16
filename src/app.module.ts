import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { CharactersModule } from './characters/characters.module';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [CharactersModule, QuotesModule],
  controllers: [AppController, CharactersController, QuotesController],
  providers: [AppService, CharactersService, QuotesService],
})
export class AppModule {}
