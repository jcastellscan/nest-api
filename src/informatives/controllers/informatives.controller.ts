// tslint:disable: indent
import { Controller, Get, Put, Param, Body, Delete, Post } from '@nestjs/common';
import { Informative } from '../../../../shared/informative';
import { InformativesRepository } from '../repositories/informatives.repository';

@Controller('informatives')
export class InformativesController {

	constructor(private informativesDB: InformativesRepository) { }

	@Get()
	async getInformatives(): Promise<Informative[]> {

		return this.informativesDB.findAll();
	}

	@Put(':informativeId')
	async updateInformative(
		@Param('informativeId') informativeId: string,
		@Body() changes: Partial<Informative>
	): Promise<Informative> {
		return this.informativesDB.updateInformative(informativeId, changes);
	}

	@Delete(':informativeId')
	async removeInformative(@Param('informativeId') informativeId: string) {
		return this.informativesDB.removeInformative(informativeId);
	}

	@Post()
	async createInformative(@Body() inf: Partial<Informative>): Promise<Informative> {
		return this.informativesDB.addInformative(inf);
	}
}