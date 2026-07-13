export const getFibonacciSequence = () => {

    const n = 100

    if (n < 0) return [];
    if (n === 0) return [0];
    
    const sequence = [0, 1];
    
    let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    
    while (nextValue <= n) {
        sequence.push(nextValue);
        nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    }
    
    return sequence;
}

