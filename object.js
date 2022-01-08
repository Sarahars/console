var person = {
firstName : "Hussein",
age : 32,
nationality:"Iraq",
vaccinated : true,
}
 console.log(person);

function createProfile(firstName, age, nationality, vaccinated){
    var person ={
        firstName : firstName,
        age: age,
        nationality: nationality,
        vaccinated: vaccinated,
    }
    console.log(person);
}

createProfile("Youcef", 31 , "DZ" , true);
createProfile("Adel", 31 , "DZ" , false);
createProfile("Haniball", 18 , "TN" , true);
createProfile("Sarah", 25 , "DZ" , false);


// with return

function createProfil(firstName, age, nationality, vaccinated){
    var person ={
        firstName : firstName,
        age: age,
        nationality: nationality,
        vaccinated: vaccinated,
    }
    return person;
}

var crtprofile1 = createProfil("Youcef", 31 , "DZ" , true)
var crtprofile2 = createProfil("Adel", 31 , "DZ" , false)
console.log(crtprofile1,crtprofile2)

console.log(crtprofile2.age , crtprofile2.nationality)


// array list

var list = [];
function profile(name, yo, nat, isV ){
    var person = {
        name : name,
        yo : yo,
        nat : nat ,
        isV : isV,
    }
    list.push(person);
}

profile("Hussein", 19 , "DZ", true)
profile("Mazine", 14 , "DZ", false)
profile("Ania", 15, "ALG", true)
profile("Aniss", 24 , "DZ", true)

isMinMaj(list)

function isMinMaj (personList){
    for (var i = 0 ; i< personList.length; i++){
        if (personList[i].age >= 18){
            console.log(personList[i].firstName + " majeur")
        }else{
            console.log(personList[i].firstName +" mineur")
        }
    }
}