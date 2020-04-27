import * as _ from 'lodash';

function square(num: number): void {
	console.log(num * num);
}

function printUsingLodash() {
	let arr = [1,2,3,4,5,6];
	_.map(arr, square);
}

module.exports = printUsingLodash;
