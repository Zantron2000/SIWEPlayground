import data from "../../../data/notes.json";

class Config {
	notes: object;

	constructor() {
		this.notes = JSON.parse(JSON.stringify(data));
	}

	get(chain: string) {
		const keys = chain.split(".");
		let value: any = this.notes;

		for (let key of keys) {
			value = value[key];

			if (!value) {
				return value;
			}
		}

		return value;
	}
}

export default new Config();
