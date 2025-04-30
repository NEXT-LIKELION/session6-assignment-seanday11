const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const result = numbers
    .filter((num) => num % 2 === 0) // 1. 짝수 필터링
    .map((num) => num ** 2) // 2. 각 숫자를 제곱
    .reduce((acc, curr) => acc + curr, 0); // 3. 합계 구하기

console.log(result);
