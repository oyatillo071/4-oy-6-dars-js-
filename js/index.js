


// // 1-mashq
// alert("1-mashq 1dan 5 gacha sonlarni ekranga chiqarish");

// for (let i = 1; i < 6; i++) {
//     alert(i); 
// }




// // 2mashq

// alert("2-mashq 1 dan 20gacha sonlarni ekranga chiqarish");

// for (let i = 1; i < 21; i++) {
//     alert(i);
// }



// 3-mashq

// alert("3-mashq foydalanuvchi kiritkan sonlarni kvadratini 1 dan shu songacha bo'lgan qiymatlar uchun ekranga chiqaring");

document.getElementById('first__btn').addEventListener('click', function () {
    let forFirstValue = document.getElementById('user__input--value').value;
    for (let i = 1; i <=(forFirstValue**2); i++) {
        alert(i);
    }
});



// // 4-mashq
// alert("4-mashq 0 dan 10 gacha bolgan sonlar ekranga chiqariladi");

// for (let i = 2; i <= 10; i+=2) {
//     alert(i);
// }



// // 5mashq

// alert("5-mashq 1 dan 15 gacha bolgan toq sonlarni ekranga chiqaradi");

// for (let i = 0; i < 16; i++) {
//     if (i%2==1) {
//         alert(i);
//     }
// }



// // 6-mashq
// alert("6-mashq foydalanuvchi kiritkan 5 ta sonni ekranga chiqaradi");

// let num;

// for (let i = 1; i<6; ++i) {
    
//     num=+prompt(i+" -sonni kiriting:");
//     alert(num);    

// }




// 7-mashq
// alert("7-mashq 5dan 15gacha bolgan sonlarni teskari tartibda ekranga chiqaradi");
// for (let i = 15; i>0; i--) {
//     alert(i);
// }



// 8-mashq
// alert("8-mashq foydalanuvchi kiritkan sonning 1dan osha songacha bolgan kopaytiruvchilarini ekranga chiqaring");

document.getElementById('eight__btn').addEventListener('click', function () {
    let userEightValue= document.getElementById('user__eight--value').value;
   
    for (let i = userEightValue; i >= 1; i--) {
        if (userEightValue % i == 0) {
            alert(i);
   
        }
   
    }
    
});

// 9-mashq
// alert("9-mashq foydalanuvchi kiritkan 1- ta sonning yig'indisini xisoblab ekranga chiqaring");

// let nineInput;
// let sum=0;

// for (let i = 1; i <11; i++) {
//     nineInput=+prompt(`${i}-Sonni kiriting`)
//     sum+=nineInput;
// }

// alert(sum);


// 10-mashq
// alert("10-mashq 1dan 50 gacha bolgan sonlardan 5 ga bolinadigan sonlarni ekranga chiqaradi");

// for (let i = 5; i <=50; i+=5) {

// for (let i = 1; i <=50; i++) {

//     if ( i % 5 == 0) {
//         alert( i );
//     }
// }





// 11mashq
// alert("11-mashq 100dan 1 gacha bolgan sonlarni teskari tartibda ekranga chiqaradi");


// for (let i = 100; i >= 1; i--) {
//     alert(i);
// }


// 12- mashq
// alert("12-mashq 1dan 100 gacha bolgan sonlarni yig'indisini ekranga chiqaradi");

// let elevenSum=0;

// for (let i = 1; i <=100; i++) {
//     elevenSum+=i;
// }

// alert(elevenSum);


// 13 mashq
// alert("13-mashq foydalanuvchi kiritkan ikki son orasidagi barcha sonlar ekranga chiqaradi");
document.getElementById('thirteen__btn').addEventListener('click', function () {
    let userThirteenValueFirst= document.getElementById('user__thirteen--first--value').value;
    let userThirteenValueSecond= document.getElementById('user__thirteen--second--value').value;
   
    for (let i = userThirteenValueFirst; i <=userThirteenValueSecond; i++) {
        alert(i);
    }
    
});

// 14 mashq
// alert("14-mashq Foydalanuvchi tomonidan kiritilgan sonning bo‘linuvchilarini toping va ekranga chiqaring.");
document.getElementById('fourteen__btn').addEventListener('click', function () {
    let userFourteenValue= document.getElementById('user__fourteen--value').value;
   for (let i = 1; i <userFourteenValue+1; i++) {
    if (userFourteenValue%i==0) {
        alert(i);
    }
   }
    
});


// 15 mashq
// alert("15-mashq 1 dan 20 gacha bo‘lgan sonlarning kvadratlarini ekranga chiqaring");
// for (let i = 1; i <=20; i++) {
//     alert(i**2);
// }


// 16 mashq
// alert("16-mashq 1 dan 100 gacha bo‘lgan sonlar orasidan faqat 7 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring");

// for (let i = 1; i <=100; i++) {
//     if (i % 7 == 0) {
//         alert(i);
//     }
// }



// 17 mashq
// alert("17-mashq 1 dan 10 gacha bo‘lgan sonlarning ko‘paytma jadvalini ekranga chiqaring");

// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <=10; j++) {
//         alert(i+"*"+j+"="+i*j);
//     }
//     alert("");
    
// }




// 18 mashq
// alert("18-mashq Foydalanuvchi tomonidan kiritilgan sonning barcha bo‘linuvchilarini toping va ularning yig‘indisini ekranga chiqaring");
document.getElementById('eightteen__btn').addEventListener('click', function () {
    let userEightteenValue= document.getElementById('user__eightteen--value').value;
    let eightteenSum=0;

    for (let i = 0; i <= userEightteenValue; i++) {
    if (userEightteenValue % i == 0) {
        eightteenSum+=i;
    }     
    }
    alert(eightteenSum);
    
});


// 19 mashq
// alert("19-mashq 1 dan 50 gacha bo‘lgan sonlarning orasidan toq sonlar yig‘indisini hisoblab, natijani ekranga chiqaring");

// let nineteenSum=0;
// for (let i = 0; i < 51; i++) {
//     if (i%2==1) {
//         nineteenSum+=i;
//     }
// }

// alert(nineteenSum);


// 20 mashq
// alert("20-mashq Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi barcha juft sonlarni ekranga chiqaring");

document.getElementById('twenty__btn').addEventListener('click', function () {
    let userTwentyValueFirst= document.getElementById('user__twenty--first--value').value;
    let userTwentyValueSecond= document.getElementById('user__twenty--second--value').value;
   
    for (let i = userTwentyValueFirst; i <=userTwentyValueSecond; i++) {
      if (i%2==0) {
          alert(i);
      }
    }
    
});


// 21 mashq
// alert("21-mashq 1 dan 100 gacha bo‘lgan sonlarning ichida faqat toq sonlar yig‘indisini ekranga chiqaring");
// let twentyOneSum=0;
// for (let i = 0; i <=100; i++) {
//     if ( i % 2 == 1) {
//         twentyOneSum+=i;
//     }
// }
// alert(twentyOneSum);





// 22 mashq
// alert("22-mashq Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang va natijani ekranga chiqaring");
document.getElementById('twentytwo__btn').addEventListener('click', function () {
    let userTwentytwoValue= document.getElementById('user__twentytwo--value').value;
    let twentytwoSum=1;

    for (let i = 1; i <= userTwentytwoValue; i++) {
        twentytwoSum*=i;
    }
    alert(twentytwoSum);
    
});




// 23 mashq
// alert("23-mashq Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang va natijani ekranga chiqaring");

// for (let i = 0; i <=50; i++) {
//     if (i % 3 != 0 && i % 5 != 0) {
//         alert(i);
//     }
// }


// 24 mashq
// alert("24-mashq 1 dan 30 gacha bo‘lgan sonlar ichida 4 va 6 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring");
// for (let i = 1; i <=30; i++) {
//     if ( i % 4 == 0 && i % 6 == 0) {
//         alert(i);
//     }
// }




// 25 mashq
// alert("25-mashq Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi sonlardan faqat toq sonlarni ekranga chiqaring va ularning yig‘indisini toping");

document.getElementById('twentyfive__btn').addEventListener('click', function () {
    let userTwentyfiveValueFirst= document.getElementById('user__twentyfive--first--value').value;
    let userTwentyfiveValueSecond= document.getElementById('user__twentyfive--second--value').value;
   let twentyfiveSum=0;

    for (let i = userTwentyfiveValueFirst; i <=userTwentyfiveValueSecond; i++) {
      if (i%2==1) {
          alert(i);
          twentyfiveSum+=i;
      }
    }
    alert("tig'indisi:  "+twentyfiveSum);
    
});
