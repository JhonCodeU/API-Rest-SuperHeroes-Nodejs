// Improved formatting of Spotted Tailed Quoll's answer
class superhero {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	introduction() {
		return `My id is ${this.id} and I am ${this.name}!`;
	}
}

module.exports = superhero;