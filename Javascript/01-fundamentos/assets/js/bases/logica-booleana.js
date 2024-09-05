const regresaTrue =()=>{
    console.log('Regresa true');
    return true;
}

const regresaFalse =()=>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log (true);
console.log (!true);
console.log (!false);

console.log (!regresaFalse());

console.warn ('And')
console.log (true && true);
console.log (true && !false);

console.log ('==============');
console.log (regresaFalse() && regresaTrue());
console.log (regresaTrue() && regresaFalse());

console.log ('====== && ========');
regresaFalse() && regresaTrue()

console.warn ('Or')
console.log (true || false);
console.log (false || true);
console.log (regresaTrue() || regresaFalse());



console.warn('asignaciones')

const soyUdefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = true && 'hola mundo' && 150;
const a2 = 'hola' && 'mundo';
const a3 = soyFalso ||'ya no soy falso';
const a4 = soyFalso ||soyUdefined||soyNull||'ya no soy falso';
const a5 = soyFalso ||soyUdefined||regresaTrue()||'ya no soy falso';



console.log ({a1,a2,a3,a4,a5});
