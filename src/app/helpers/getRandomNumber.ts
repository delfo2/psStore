export function getRandomNumber(min: number, max: number): number {
    let n = random(min, max);
    while(n < min || n > max) {
        n = random(min, max);
    }
    return n;
}

function random(min: number, max : number): number{
    return max - Math.round((Math.random() * max - min));
}
