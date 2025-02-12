export function substract(a: number, b: number): number {
    if (a === Number.MIN_VALUE && b > 0) {
        throw new Error("Infinity value")
    }
    
    return a - b
}

export function divide(a: number, b: number): number {
    if(b === 0) {
        throw new Error("Divide by 0");
    }

    return a / b
}