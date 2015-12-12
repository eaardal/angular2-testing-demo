/// <reference path="../typings/tsd.d.ts" />

import {Foo} from './foo';

describe('Foo', () => {
	it('hi should return hello', () => {
		var foo = new Foo();
		expect(foo.greeting).toBe('hello');
	});
});
