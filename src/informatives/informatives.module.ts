import { Module } from '@nestjs/common';
import { InformativesController } from "./controllers/informatives.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { InformativeSchema } from '../../../shared/schemas/informatives.schema';
import { InformativesRepository } from './repositories/informatives.repository';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Informative', schema: InformativeSchema }
		])
	],
	controllers: [
		InformativesController
	],
	providers: [
		InformativesRepository
	]
})
export class InformativesModule { }
