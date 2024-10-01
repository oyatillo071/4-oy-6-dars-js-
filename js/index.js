


// // 1-mashq
// console.log("1-mashq 1dan 5 gacha sonlarni ekranga chiqarish");

// for (let i = 1; i < 6; i++) {
//     console.log(i); 
// }




// // 2mashq

// console.log("2-mashq 1 dan 20gacha sonlarni ekranga chiqarish");

// for (let i = 1; i < 21; i++) {
//     console.log(i);
// }



// 3-mashq

// console.log("3-mashq foydalanuvchi kiritkan sonlarni kvadratini 1 dan shu songacha bo'lgan qiymatlar uchun ekranga chiqaring");

document.getElementById('first__btn').addEventListener('click', function () {
    let forFirstValue = document.getElementById('user__input--value').value;
    for (let i = 1; i <=(forFirstValue**2); i++) {
        console.log(i);
    }
});



// // 4-mashq
// console.log("4-mashq 0 dan 10 gacha bolgan sonlar ekranga chiqariladi");

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);
// }



// // 5mashq

// console.log("5-mashq 1 dan 15 gacha bolgan toq sonlarni ekranga chiqaradi");

// for (let i = 0; i < 16; i++) {
//     if (i%2==1) {
//         console.log(i);
//     }
// }



// // 6-mashq
// console.log("6-mashq foydalanuvchi kiritkan 5 ta sonni ekranga chiqaradi");

// let num;

// for (let i = 1; i<6; ++i) {
    
//     num=+prompt(i+" -sonni kiriting:");
//     console.log(num);    

// }




// 7-mashq
// console.log("7-mashq 5dan 15gacha bolgan sonlarni teskari tartibda ekranga chiqaradi");
// for (let i = 15; i>0; i--) {
//     console.log(i);
// }



// 8-mashq
// console.log("8-mashq foydalanuvchi kiritkan sonning 1dan osha songacha bolgan kopaytiruvchilarini ekranga chiqaring");

document.getElementById('eight__btn').addEventListener('click', function () {
    let userEightValue= document.getElementById('user__eight--value').value;
   
    for (let i = userEightValue; i >= 1; i--) {
        if (userEightValue % i == 0) {
            console.log(i);
   
        }
   
    }
    
});

// 9-mashq
// console.log("9-mashq foydalanuvchi kiritkan 1- ta sonning yig'indisini xisoblab ekranga chiqaring");

// let nineInput;
// let sum=0;

// for (let i = 1; i <11; i++) {
//     nineInput=+prompt(`${i}-Sonni kiriting`)
//     sum+=nineInput;
// }

// console.log(sum);


// 10-mashq
// console.log("10-mashq 1dan 50 gacha bolgan sonlardan 5 ga bolinadigan sonlarni ekranga chiqaradi");

// for (let i = 5; i <=50; i+=5) {

// for (let i = 1; i <=50; i++) {

//     if ( i % 5 == 0) {
//         console.log( i );
//     }
// }





// 11mashq
// console.log("11-mashq 100dan 1 gacha bolgan sonlarni teskari tartibda ekranga chiqaradi");


// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }


// 12- mashq
// console.log("12-mashq 1dan 100 gacha bolgan sonlarni yig'indisini ekranga chiqaradi");

// let elevenSum=0;

// for (let i = 1; i <=100; i++) {
//     elevenSum+=i;
// }

// console.log(elevenSum);


// 13 mashq
// console.log("13-mashq foydalanuvchi kiritkan ikki son orasidagi barcha sonlar ekranga chiqaradi");
document.getElementById('thirteen__btn').addEventListener('click', function () {
    let userThirteenValueFirst= document.getElementById('user__thirteen--first--value').value;
    let userThirteenValueSecond= document.getElementById('user__thirteen--second--value').value;
   
    for (let i = userThirteenValueFirst; i <=userThirteenValueSecond; i++) {
        console.log(i);
    }
    
});

// 14 mashq
// console.log("14-mashq Foydalanuvchi tomonidan kiritilgan sonning bo‘linuvchilarini toping va ekranga chiqaring.");
document.getElementById('fourteen__btn').addEventListener('click', function () {
    let userFourteenValue= document.getElementById('user__fourteen--value').value;
   for (let i = 1; i <userFourteenValue+1; i++) {
    if (userFourteenValue%i==0) {
        console.log(i);
    }
   }
    
});


// 15 mashq
// console.log("15-mashq 1 dan 20 gacha bo‘lgan sonlarning kvadratlarini ekranga chiqaring");
// for (let i = 1; i <=20; i++) {
//     console.log(i**2);
// }


// 16 mashq
// console.log("16-mashq 1 dan 100 gacha bo‘lgan sonlar orasidan faqat 7 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring");

// for (let i = 1; i <=100; i++) {
//     if (i % 7 == 0) {
//         console.log(i);
//     }
// }



// 17 mashq
// console.log("17-mashq 1 dan 10 gacha bo‘lgan sonlarning ko‘paytma jadvalini ekranga chiqaring");

// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <=10; j++) {
//         console.log(i+"*"+j+"="+i*j);
//     }
//     console.log("");
    
// }




// 18 mashq
// console.log("18-mashq Foydalanuvchi tomonidan kiritilgan sonning barcha bo‘linuvchilarini toping va ularning yig‘indisini ekranga chiqaring");
document.getElementById('eightteen__btn').addEventListener('click', function () {
    let userEightteenValue= document.getElementById('user__eightteen--value').value;
    let eightteenSum=0;

    for (let i = 0; i <= userEightteenValue; i++) {
    if (userEightteenValue % i == 0) {
        eightteenSum+=i;
    }     
    }
    console.log(eightteenSum);
    
 
});

