// tslint:disable: indent
import { Injectable } from '@nestjs/common';
import { Informative } from '../../../../shared/informative';
import { Model, DocumentQuery } from 'mongoose';
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

	async updateInformative(informativeId: string, changes: Partial<Informative>): Promise<Informative> {
		return await this.informativeModel.findOneAndUpdate(
			{ _id: informativeId },
			changes,
			{ new: true }
		);

	}

}
