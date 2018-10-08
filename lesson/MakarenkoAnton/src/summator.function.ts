export function summator(first: number, ...args: number[]): number;
export function summator(first: string, ...args: string[]): string;
export function summator(... args: (string|number)[]) {
    let result = typeof args[0] === 'number' ? 0 : '';
    for (const arg of args) {
        // result += arg; // the simple implementation but doesn't work
        if (typeof result === 'number' && typeof arg === 'number') { // ?!
            result += arg;
        }
        if (typeof result === 'string') {
            result += arg;
        }
    }
    return result;
}
