let age_11 = 0 // task 2* , task 3**
let age_22 = 18
let age_33 = 60 
let age_44 = 100

const checkAge2 = function(age) {
       if(age && !isNaN(age)) {
if (age <= age_11)
 {alert("You must be kidding!")
}
else if (age < age_22 && age > age_11 ) 
{alert("You don't have access cause your age is"+' ' + age +'. '+"It's less then") 
} 
else if(age >= age_22 && age < age_33) 
{alert("Welcome!")
} 
else if(age > age_33 && age <= age_44) 
{alert("Keep calm and look Culture channel")
} 
else  if(age > age_44)
    {    alert("You are vampire!")
}} 
else alert("Not a number")
}
let years = prompt("How old are you")

checkAge2(years);