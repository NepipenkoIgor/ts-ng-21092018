export function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const result = [];
    const l = data.length;

    let chunk: T[] = [];
    for (let i = 0; i < l; i++) {
        for (let j = i; j < i + rowSize && j < l; j++) {
            if (j === i) {
                chunk = [];
            }
            chunk.push(data[j]);
        }
        result.push(chunk);
        i += rowSize - 1;
    }

    return result;
}
