/*
const, let, var kulcsszavakkal hozunk létre változókat 

az egyenlőség jel bal oldalán szerepel a változó név, jobb oldalán az ehhez tartozó érték.

a primitívek a következők: szöveg, azaz string, szám, bolean azaz true, false,  undefined és null.


*/

let aString = "this is a string"; // MINDIG idézőjelbe tesszük a stringet,  backtickkel `` több soros stringet tudunk létrehozni,'' és "" csak egy sorost

let aNumber = 1; //Nem szabad a számot idézőjelbe rakni//

let aBoolean = false; //Ezt sem szabad idézőjelbe tenni//

let anUndefined = undefined; //Ezt sem szabad idézőjelbe tenni//

let aNull = null; //Ezt sem szabad idézőjelbe tenni//

let notANumber = NaN; //not a number, ezt sem írjuk idézőjelbe, ez egy szám.//

console.log(typeof aString) // a változók nevét ugyanúgy kell leírni, ahogy létrehoztuk//

console.log(typeof anUndefined) //undefine a típusa//

console.log(typeof aNull) //object a típusa//

console.log(typeof notANumber) //szám a típusa//


console.log(aFunction1()) //ez is működik

function aFunction1() {
    //ez a függvény belseje a kapcsoszárójelek közott 
    
    // a függvény mindenképpen returnöl,ha lefuttatjuk; ha nem adunk meg return-t, akkor undefine-t ad vissza
    return "this is a function" //return: lezárja a műveletet és visszatér valamilyen értékkel (breakel)
}



const aFunction2 = function() {
   // ez is egy függvény, majdnem ugyanúgy viselkedik, mintha a függvénynek neve lenne (ezt egy változóba mentettük- first class citizens, egy változóba is belementhetjük. Az első függvényt bárhól meg tudjuk hívni.
   return "this is another function"
}

console.log(aFunction2()); //minden változóba mentett dologhoz csak akkor férünk hozzá, ha az utána lévő sorokba írjuk

if (true){
    //ide jön az, ha teljesül a feltételünk
}else {
    //ide jön, ha nem teljesül a feltétel
}

console.log("0" == 0);

console.log("0" === 0);
//=== összehasonlításra használjuk, mert a típusát és az értékét is vizsgálja

//Azt hívják tömbnek (felsorolásnak), amin for ciklussal lehet rajta végigmenni
const arr = [34, 15, 88, 2] //ez egy tömb, négyzetes zárójelek közt

for (let index = 0; index < arr.length; index++) {
    
    console.log(arr[index])
        
}

for (const item of arr) {
    console.log(item)
}

//ez a 2 uangyazt csinálja,a cikluson belül ugyanúgy tudunk 