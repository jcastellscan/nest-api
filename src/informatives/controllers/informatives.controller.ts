import { Controller, Get } from '@nestjs/common';
import { Informative } from '../../../../shared/informative';

@Controller()
export class InformativesController {

	// @Get('/api/informatives')
	// getInformatives(): Promise<Informative[]> {

	// }

	@Get('api/informatives')
	async getInformatives(): Promise<Informative[]> {

		return [{
			id: '1',
			title: 'primer titulo',
			description: 'Efectivamente este es el primer titulo'
		},
		{
			id: '2',
			title: 'segundo titulo',
			description: 'Efectivamente este es el segundo titulo'
		},
		{
			id: '3',
			title: 'tercer titulo',
			description: 'Efectivamente este es el tercer titulo'
		},
		{
			id: '4',
			title: 'cuarto titulo',
			description: 'Efectivamente este es el cuarto titulo'
		},
		{
			id: '5',
			title: 'quinto titulo',
			description: 'Efectivamente este es el quinto titulo'
		},
		{
			id: '6',
			title: 'sexto titulo',
			description: 'Efectivamente este es el sexto titulo'
		}
		]
	}

}