import { Controller, Get } from '@nestjs/common';
import { Informative } from '../../../../shared/informative';
import { InformativesRepository } from '../repositories/informatives.repository';

@Controller()
export class InformativesController {

	constructor(private informativesDB: InformativesRepository) { }

	@Get('api/informatives')
	async getInformatives(): Promise<Informative[]> {

		return this.informativesDB.findAll();
	}

}