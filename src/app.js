import 'babel-polyfill';
import lib from './lib';
import colors from './json/colors.json';

console.log(`Colors are ${colors}`);
lib.sayHello();