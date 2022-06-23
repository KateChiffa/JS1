let age_1 = 0 // task 1*
let age_2 = 18
let age_3 = 60 
let age_4 = 100

const checkAge = function(age) {
if (age <= age_1)
 {console.log("You must be kidding!")
}
else if (age < age_2 && age > age_1 ) 
{console.log("You don't have access cause your age is"+' ' + age +'. '+"It's less then") 
} 
else if(age >= age_2 && age < age_3) 
{console.log("Welcome!")
} 
else if(age > age_3 && age <= age_4) 
{console.log("Keep calm and look Culture channel")
} 
else  if(age > age_4)
    {    console.log("You are vampire!")
}};

checkAge(17);
checkAge(18);
checkAge(61);


