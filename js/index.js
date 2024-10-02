


// // 1-mashq
// alert("1-mashq 1dan 5 gacha sonlarni ekranga chiqarish");
let firstAnswerValue = " ";
for (let i = 1; i < 6; i++) {
    firstAnswerValue += "   " + i;
    document.getElementById('first--answer').innerHTML = firstAnswerValue;
}




// // 2mashq

// alert("2-mashq 1 dan 20gacha sonlarni ekranga chiqarish");
let secondAnswerValue = " ";

for (let i = 1; i < 21; i++) {
    secondAnswerValue += "  " + i + "  ";
    document.getElementById('second--answer').innerHTML = secondAnswerValue;
}



// 3-mashq

// alert("3-mashq foydalanuvchi kiritkan sonlarni kvadratini 1 dan shu songacha bo'lgan qiymatlar uchun ekranga chiqaring");

document.getElementById('third__btn').addEventListener('click', function () {
    let forFirstValue = parseInt(document.getElementById('user__input--value').value);
    let thirdAnswerValue = "  ";

    for (let i = 1; i <= (forFirstValue ** 2); i++) {
        thirdAnswerValue += "  " + i + "  ";
        document.getElementById('third--answer').innerHTML = thirdAnswerValue;

    }
});



// // 4-mashq
// alert("4-mashq 0 dan 10 gacha bolgan juft sonlarni ekranga chiqariladi");
let fourAnswerValue = "  ";

for (let i = 2; i <= 10; i += 2) {
    fourAnswerValue += "  " + i + "  ";
    document.getElementById('four--answer').innerHTML = fourAnswerValue;
}



// // 5mashq

// alert("5-mashq 1 dan 15 gacha bolgan toq sonlarni ekranga chiqaradi");
let fiveAnswerValue = " ";
for (let i = 0; i < 16; i++) {
    if (i % 2 == 1) {
        fiveAnswerValue += "  " + i + "  ";
        document.getElementById('five--answer').innerHTML = fiveAnswerValue;
    }
}



// // 6-mashq
// alert("6-mashq foydalanuvchi kiritkan 5 ta sonni ekranga chiqaradi");
document.getElementById('seven__btn').addEventListener('click', function () {

    let num = 0;
    let sixAnswerValue = " ";

    for (let i = 1; i <= 5; ++i) {

        num = +prompt(i + " -sonni kiriting:");
        sixAnswerValue += "  " + num + "   ";
        document.getElementById('six--answer').innerHTML = sixAnswerValue;

    }


});



// 7-mashq
// alert("7-mashq 5dan 15gacha bolgan sonlarni teskari tartibda ekranga chiqaradi");



let sevenAnswerValue = " ";

for (let i = 15; i >=5; i--) {

    sevenAnswerValue += "  " +i+ "   ";
    document.getElementById('seven--answer').innerHTML = sevenAnswerValue;
}









// 8-mashq
// alert("8-mashq foydalanuvchi kiritkan sonning 1dan osha songacha bolgan kopaytiruvchilarini ekranga chiqaring");

document.getElementById('eight__btn').addEventListener('click', function () {
    let userEightValue = parseInt(document.getElementById('user__eight--value').value);
    let eightAnswerValue=" ";
   
    for (let i = 1 ; i <= userEightValue; i++) {
        
        if (userEightValue % i == 0) {
         
            eightAnswerValue += "  " +i+ "   ";
            
        }
    }

    document.getElementById('eight--answer').innerHTML = eightAnswerValue;

});

// 9-mashq
// alert("9-mashq foydalanuvchi kiritkan 1- ta sonning yig'indisini xisoblab ekranga chiqaring");


document.getElementById('nine__btn').addEventListener('click', function () {

    let nineInput;
    let nineAswerValue=0;

    for (let i = 1; i <11; i++) {
        nineInput=+prompt(`${i}-Sonni kiriting`)
        nineAswerValue+=nineInput;
    }
    document.getElementById('nine--answer').innerHTML = nineAswerValue;
    
});









// 10-mashq
// alert("10-mash 1qdan 50 gacha bolgan sonlardan 5 ga bolinadigan sonlarni ekranga chiqaradi");

// for (let i = 5; i <=50; i+=5) {

let tenAnswerValue=" ";
for (let i = 1; i <=50; i++) {

    if ( i % 5 == 0) {

        tenAnswerValue += "  " +i+ "   ";
        document.getElementById('ten--answer').innerHTML = tenAnswerValue;
    }
}





// 11mashq
// alert("11-mashq 100dan 1 gacha bolgan sonlarni teskari tartibda ekranga chiqaradi");

let elevenAnswerValue=" ";

for (let i = 100; i >= 1; i--) {
    elevenAnswerValue += "  " +i+ "   ";
    document.getElementById('eleven--answer').innerHTML = elevenAnswerValue;

}






// 12- mashq
// alert("12-mashq 1dan 100 gacha bolgan sonlarni yig'indisini ekranga chiqaradi");

let tvelweAnswerValue=0;

for (let i = 1; i <=100; i++) {

    tvelweAnswerValue+=i;

}
document.getElementById('tvelwe--answer').innerHTML = tvelweAnswerValue;

    



// 13 mashq
// alert("13-mashq foydalanuvchi kiritkan ikki son orasidagi barcha sonlar ekranga chiqaradi");
document.getElementById('thirteen__btn').addEventListener('click', function () {
    let userThirteenValueFirst = parseInt(document.getElementById('user__thirteen--first--value').value);
    let userThirteenValueSecond = parseInt(document.getElementById('user__thirteen--second--value').value);
    let thirteenAnswerValue=" ";

    for (let i = userThirteenValueFirst; i <= userThirteenValueSecond; i++) {
        thirteenAnswerValue += "  " + i + "   ";
        document.getElementById('thirteen--answer').innerHTML = thirteenAnswerValue;
    
    }
    

});




// 14 mashq
// alert("14-mashq Foydalanuvchi tomonidan kiritilgan sonning bo‘linuvchilarini toping va ekranga chiqaring.");
document.getElementById('fourteen__btn').addEventListener('click', function () {
    let userFourteenValue = parseInt(document.getElementById('user__fourteen--value').value);
    let fourteenAnswerValue=" ";
    
    for (let i = 1; i < userFourteenValue + 1; i++) {
        if (userFourteenValue % i == 0) {
            fourteenAnswerValue += "  " + i + "   ";
            document.getElementById('fourteen--answer').innerHTML = fourteenAnswerValue;
        
        }
    }

});


// 15 mashq
// alert("15-mashq 1 dan 20 gacha bo‘lgan sonlarning kvadratlarini ekranga chiqaring");

let fiveteenAnswerValue=1;

for (let i = 2; i <=20; i++) {
    fiveteenAnswerValue += "  " + i**2 + "   ";
}
    
document.getElementById('fiveteen--answer').innerHTML = fiveteenAnswerValue;




// 16 mashq
// alert("16-mashq 1 dan 100 gacha bo‘lgan sonlar orasidan faqat 7 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring");
let sixteenAnswerValue=" ";

for (let i = 1; i <=100; i++) {
    if (i % 7 == 0) {
        sixteenAnswerValue += "  " + i+ "   ";

    }
}
document.getElementById('sixteen--answer').innerHTML = sixteenAnswerValue;




// 17 mashq
// alert("17-mashq 1 dan 10 gacha bo‘lgan sonlarning ko‘paytma jadvalini ekranga chiqaring");
let seventeenAnswerValue=" ";

for (let i = 1; i <=10; i++) {
    for (let j = 1; j <=10; j++) {
        seventeenAnswerValue += "  " +(i+"*"+j+"="+i*j)+ "<br>";
    }
    seventeenAnswerValue +="<br>"+"<br>";
    
}
document.getElementById('seventeen--answer').innerHTML = seventeenAnswerValue;




// 18 mashq
// alert("18-mashq Foydalanuvchi tomonidan kiritilgan sonning barcha bo‘linuvchilarini toping va ularning yig‘indisini ekranga chiqaring");
document.getElementById('eightteen__btn').addEventListener('click', function () {
    let userEightteenValue = parseInt(document.getElementById('user__eightteen--value').value);
    let eightteenSum = 0;

    for (let i = 0; i <= userEightteenValue; i++) {
        if (userEightteenValue % i == 0) {
            eightteenSum += i;
        }
    }
document.getElementById('eightteen--answer').innerHTML = eightteenSum;


});






// 19 mashq
// alert("19-mashq 1 dan 50 gacha bo‘lgan sonlarning orasidan toq sonlar yig‘indisini hisoblab, natijani ekranga chiqaring");

let nineteenSum=0;
for (let i = 0; i < 51; i++) {
    if (i%2==1) {
        nineteenSum+=i;
    }
}
document.getElementById('nineteen--answer').innerHTML = nineteenSum;








// 20 mashq
// alert("20-mashq Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi barcha juft sonlarni ekranga chiqaring");

document.getElementById('twenty__btn').addEventListener('click', function () {
    let userTwentyValueFirst = parseInt(document.getElementById('user__twenty--first--value').value);
    let userTwentyValueSecond = parseInt(document.getElementById('user__twenty--second--value').value);
    let tventyAnswerValue=" ";
    for (let i = userTwentyValueFirst; i <= userTwentyValueSecond; i++) {
        if (i % 2 == 0) {
            
        tventyAnswerValue += "  " +i+ " ";

        }
    }
    document.getElementById('tventy--answer').innerHTML = tventyAnswerValue;

});


// 21 mashq
// alert("21-mashq 1 dan 100 gacha bo‘lgan sonlarning ichida faqat toq sonlar yig‘indisini ekranga chiqaring");
let twentyOneSum=0;
for (let i = 0; i <=100; i++) {
    if ( i % 2 == 1) {
        twentyOneSum+=i;
    }
}
document.getElementById('tventyone--answer').innerHTML = twentyOneSum;





// 22 mashq
// alert("22-mashq Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang va natijani ekranga chiqaring");
document.getElementById('twentytwo__btn').addEventListener('click', function () {
    let userTwentytwoValue = parseInt(document.getElementById('user__twentytwo--value').value);
    let twentytwoSum = 1;

    for (let i = 1; i <= userTwentytwoValue; i++) {
        twentytwoSum *= i;
    }
    document.getElementById('tventytwo--answer').innerHTML = twentytwoSum;

});




// 23 mashq
// alert("23-mashq Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang va natijani ekranga chiqaring");
let twentythreeAnswerValue=" ";

for (let i = 0; i <=50; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
        twentythreeAnswerValue += "  " +i+ " ";    
    }
}
document.getElementById('tventythree--answer').innerHTML = twentythreeAnswerValue;






// 24 mashq
// alert("24-mashq 1 dan 30 gacha bo‘lgan sonlar ichida 4 va 6 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring");
let twentyfourAnswerValue=" ";

for (let i = 1; i <=30; i++) {
    if ( i % 4 == 0 && i % 6 == 0) {

        twentyfourAnswerValue += "  " +i+ " ";    
   
    }
}
document.getElementById('tventyfour--answer').innerHTML = twentyfourAnswerValue;




// 25 mashq
// alert("25-mashq Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi sonlardan faqat toq sonlarni ekranga chiqaring va ularning yig‘indisini toping");

document.getElementById('twentyfive__btn').addEventListener('click', function () {
    let userTwentyfiveValueFirst = parseInt(document.getElementById('user__twentyfive--first--value').value);
    let userTwentyfiveValueSecond = parseInt(document.getElementById('user__twentyfive--second--value').value);
    let twentyfiveSum = 0;
    let twentyfiveAnswerValue=" ";
    for (let i = userTwentyfiveValueFirst; i <= userTwentyfiveValueSecond; i++) {
        if (i % 2 == 1) {
        twentyfiveAnswerValue += "  " +i+ " ";    
            twentyfiveSum += i;
        }
    }

document.getElementById('tventyfiveSum--answer').innerHTML = twentyfiveSum;
document.getElementById('tventyfive--answer').innerHTML = twentyfiveAnswerValue;


});



// additional tasks //qoshimcha misollar 

// Qoshimcha kiritilgan sommi raqamlarini konsolga chiqaradi
document.getElementById('task--first__btn').addEventListener('click', function () {
    let taskFirstValue = document.getElementById('task--first').value;
    let TaskUserNum = taskFirstValue.toString();
    let taskFirstAnswer = " ";

    for (let i = 1; i <= TaskUserNum.length; ++i) {

        taskFirstAnswer += "<br>" + i + "-son : " + TaskUserNum[i - 1];
        document.getElementById('task--first--answer').innerHTML = taskFirstAnswer;
    }


});


