// tslint:disable: indent
import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { Informative } from '../../../../shared/informative';
import { InformativesRepository } from '../repositories/informatives.repository';

@Controller('informatives')
export class InformativesController {

	constructor(private informativesDB: InformativesRepository) { }

	@Get()
	async getInformatives(): Promise<Informative[]> {

		return this.informativesDB.findAll();
	}


	@Put('/:informativeId')
	async updateCourse(
		@Param('informativeId') informativeId: string,
		@Body() changes: Partial<Informative>
	): Promise<Informative> {
		return this.informativesDB.updateInformative(informativeId, changes);
	}

}