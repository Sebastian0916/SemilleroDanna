export class Person {
  // public name :string;
  // private addres:string;

  constructor(
    public fristName: string, 
    public lastName: string, 
    private addres: string = 'No addres'
  ) {}
}

// export class Hero extends Person{

//     constructor(public alterEgo:string,
//         public age : number,
//         public realName:string, )
//         {
//             super(realName, 'New York')
//     }
// }
export class Hero {
  //public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}
const tony = new Person('Tony','Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony); //inyección de dependencias
console.log(ironman);
