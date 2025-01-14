import Actor from './Actor.js';

class NonPlayerCharacter extends Actor {
	constructor(blob, startAt = []) {
		super(blob, startAt);
		this.knownAbilities = ['hack', 'slash'];
	}
}

export default NonPlayerCharacter;
