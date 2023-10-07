let score = parseInt(prompt("Enter the score "));

if (score > 79 && score < 101)
   console.log("A");
else if (score > 69 && score < 80)
   console.log("B");
else if (score > 59 && score < 70)
   console.log("C");
else if (score > 49 && score < 60)
   console.log("D");
else console.log("F");


//seasons
let month = prompt("enter month to check seasons");
switch (month) {
    case "september":
    case "october":
    case "November":
        console.log("the season is Autumn");
        break;
    case "december":
    case "january":
    case "febuary":
        console.log("the season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("the season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("the season is Summer");
        break;
    default:
        console.log("invalid Month")
}


let day = prompt("What is the day today? ").toLowerCase();
if (day == "saturday" || day == "sunday")
    console.log(day, " is a weekend!")
else console.log(day, " is a working day");
