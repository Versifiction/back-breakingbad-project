import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get('random')
    getRandom() {
        return this.charactersService.getRandom();
    }

    @Get('all')
    getAll() {
        return this.charactersService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.charactersService.getOne(id);
    }
}
