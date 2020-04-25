import { Module } from "@nestjs/common";
import { InformativesController } from "./controllers/informatives.controller";

@Module({
	controllers: [
		InformativesController
	]
})
export class InformativesModule {

}