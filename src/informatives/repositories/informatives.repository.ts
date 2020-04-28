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

	async removeInformative(informativeId: string) {
		return this.informativeModel.deleteOne({ _id: informativeId });
	}

	async addInformative(inf: Partial<Informative>) {
		const newInformative = new this.informativeModel(inf);

		await newInformative.save();

		return newInformative.toObject({ versionKey: false });
	}

}
