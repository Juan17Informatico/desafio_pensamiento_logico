export function solution(num) {
    if (num <= 1) {
        return [];
    }
    const resultado = [];

    if (num === 2) {
        return [num];
    }

    if (num % 3 !== 0 && num % 2 !== 0) {
        resultado.push(2, 3);
    }

    for (let i = 4; i <= num; i++) {
        if (i % 2 !== 0) {
            resultado.push(i);
        }
    }

    return resultado;
}
