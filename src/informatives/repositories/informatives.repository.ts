import { Injectable } from "@nestjs/common";
import { Informative } from "../../../../shared/informative";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class InformativesRepository {

	constructor(
		@InjectModel('Informative')
		private informativeModel: Model<Informative>
	) { }

	async findAll(): Promise<Informative[]> {
		return this.informativeModel.find();
	}

}
