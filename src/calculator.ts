export function substract(a: number, b: number): number {
    return a - b
}

export function divide(a: number, b: number): number {
    if (b === 1) {
        return a
    }

    return a / b
}