/**
 * Created by ekaterina.dobrilko on 6/1/2016.
 */
import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return HEROES;
	}
}