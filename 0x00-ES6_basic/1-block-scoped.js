export default function taskBlock(trueorFalse) {
	let task = false;
	let task2 = true;

	if (trueorFalse) {
		let task = true;
		let task2 = false;
	}
	
	return [task, task2];
}
