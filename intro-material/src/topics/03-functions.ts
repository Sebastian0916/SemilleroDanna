function addNumbers(a: any, b: any) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firstNumber: number, secondNumber?: number, base: number=2) {
  return firstNumber*base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult:number=multiply(5);
// console.log({ result, result2,multiplyResult});

interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}

const healCharacter =(chararter:Character,amount:number) =>{
    chararter.hp += amount;
}
const strider = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
    
    
}

healCharacter(strider,10)

strider.showHp();


export {};
