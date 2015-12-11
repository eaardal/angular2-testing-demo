import {Hero} from './hero';
import * as jasmine from '../../node_modules/jasmine-core/lib/jasmine-core.js'

jasmine.describe('smoke tests', () => {
    jasmine.it('true to be true', () => {
        jasmine.expect(true).toBe(true);
    });
});

/*
jasmine.describe('Hero', () => {

    jasmine.it('has name given in the constructor', () => {
        let hero = new Hero(1, 'Super Cat');
        jasmine.expect(hero.name).toEqual('Super Cat');
    });

    jasmine.it('has id given in the constructor', () => {
        let hero = new Hero(1, 'Super Cat');
        expect(hero.id).toEqual(1);
    });
});
*/
