let age_11 = 0 // task 2* , task 3**
let age_22 = 18
let age_33 = 60 
let age_44 = 100

const checkAge2 = function(age) {
       if(age && !isNaN(age)) {
if (age <= age_11)
 {console.log("You must be kidding!")
}
else if (age < age_22 && age > age_11 ) 
{console.log("You don't have access cause your age is"+' ' + age +'. '+"It's less then") 
} 
else if(age >= age_22 && age < age_33) 
{console.log("Welcome!")
} 
else if(age > age_33 && age <= age_44) 
{console.log("Keep calm and look Culture channel")
} 
else  if(age > age_44)
    {    console.log("You are vampire!")
}} 
else console.log("Not a number")
}

checkAge2(17);
checkAge2(18);
checkAge2('2');
checkAge2(0);
checkAge2(-5);
checkAge2(+200);
checkAge2('hgy');
checkAge2('kg45');

