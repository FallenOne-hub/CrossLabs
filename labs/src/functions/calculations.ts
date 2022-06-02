export const multiply = (first: number, second: number, third: number) => {
    if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
        return first * second * third
    }
    return Math.pow(first + second + third, 2)
}

export const calculateRange = (first: number, second: number) => {
    let result = 1
    for (let i = first; i <= second; i++) {
        if (i % 8 === 0) result *= i
    }
    return result
}

export const generateMatrix = (dim: number) => {
    const matrix: number[][] = []
    const arr: number[] = []
    let product = 1

    for (let i = 0; i < dim; i++) {
        matrix[i] = []
        for (let j = 0; j < dim; j++) {
            matrix[i][j] = getRandomInt(0, 100)
        }
    }
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            product *= matrix[j][i]
        }
        arr.push(product)
        product = 1
    }
    return { matrix, arr }
}

export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}