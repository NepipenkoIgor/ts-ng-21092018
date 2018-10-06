export function isInArray<T>(haystack: T[], first: T, ...needles: T[]): boolean {
    let all = [];
    all.push(first);
    all = all.concat(needles);
    for (const el of all) {
        if (haystack.indexOf(el) === -1) {
            return false;
        }
    }
    return true;
}
