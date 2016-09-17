import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../hero';

@Pipe({ name: 'heroNameStartsWith' })
export class HeroNameStartsWithPipe implements PipeTransform {
  transform(allHeroes: Hero[],text:string) {
    return allHeroes.filter(hero => hero.name.startsWith(text));
  }
}
