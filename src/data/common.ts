export async function getRandomNumber(max: number): Promise<number> {
	return Math.floor(Math.random() * max)
}

export function delayPromise(delay: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, delay))
}
