function solution(number) {
    let counter = number;

    return function solution(b) {
        return counter + b;
    }
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));