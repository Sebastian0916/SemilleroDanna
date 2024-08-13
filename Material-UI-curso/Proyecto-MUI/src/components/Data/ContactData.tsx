export interface FormValues {
    id:number;
    name?:string;
    role?:string;
    skills:string[];
    startDate?:string;
    preference?:string;
}

const today = new Date();

export const contacData: Array<FormValues> = [
    {id:1,name:'juan',role:'dev',skills:['react', 'angular'],startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`,preference:'work'},
    {id:2,name:'juan',role:'dev',skills:['react'],startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`,preference:'work'},
    {id:3,name:'juan',role:'dev',skills:['react', 'angular'],startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`,preference:'work'},
    {id:4,name:'juan',role:'dev',skills:['react', 'angular'],startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`,preference:'work'}
]