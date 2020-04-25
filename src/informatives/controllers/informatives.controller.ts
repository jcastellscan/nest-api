import { Controller, Get } from "@nestjs/common";

@Controller()
export class InformativesController {

	@Get('/api/hello-world')
	async helloWorld(): Promise<string> {
		return 'Hello WOWWWWWWW!!!';
	}

	// getInformatives(): Promise<Informative[]> {

	// }

}