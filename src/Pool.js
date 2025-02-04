class Pool {
	constructor(value, max) {
		this.value = value;
		this.max = max;
		this.min = 0;
	}

	get() {
		return this.value;
	}

	set(v) {
		if (typeof v !== 'number') throw new Error('Cannot set to a non-number');
		this.value = Math.max(Math.min(this.max, v), this.min);
		return this.value;
	}

	getText() {
		return `${this.value} / ${this.max}`;
	}

	add(n = 0) {
		if (n < 0) return -1 * this.subtract(-n);
		const maxToAdd = Math.min(this.max - this.value, n);
		this.set(this.value + maxToAdd);
		return maxToAdd;
	}

	subtract(n = 0) {
		if (n < 0) return -1 * this.add(-n);
		const maxToSubtract = Math.min(this.value, n);
		this.set(this.value - maxToSubtract);
		return maxToSubtract;
	}
}

export default Pool;
