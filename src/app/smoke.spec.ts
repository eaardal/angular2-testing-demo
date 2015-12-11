/// <reference path="../typings/tsd.d.ts" />

class Smoke{
	public name: string = "Bob";
}

describe('smoke test', function() {
	it('true to be true', function(){
		expect(true).toBe(true);
	});

	it('name should be Bob', () => {
		expect(new Smoke().name).toBe("Bob");
	});
});