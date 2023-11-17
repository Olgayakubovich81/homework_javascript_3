

// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function Num(a, b) {
  if (a > b) {
    console.log(a)
  } else {
    console.log(b)
  }
}
Num (50,10)

// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function createArrFromRange(a, b) { 
  let arr = []
  let min = a 
  let max = b 
  if (a > b) { 
    min = b
    max = a
  }
    for(let i = max; i >= min; i--) {if (i%2===0)
    arr.push(i)
  }
    return arr
}
console.log(createArrFromRange(60, 40))


// // // 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

      function power(a, b) {
        return a**b
      }
        console.log (power (4,2))

// // Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function getsum (n) {

let sum= 0;
for(let i = 1; i < n; i++) {
  sum = sum + i; 
}
return sum;

}
 
 console.log (getsum(10))


// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sum(n, m) {
  let evenSum = 0;
  let oddSum = 0;

  if (n < m) {
    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        evenSum = evenSum + i;
      } else {
        oddSum = oddSum + i;
      }
    }
  } else if (m < n) {
    for (let i = m; i <= n; i++) {
      if (i % 2 === 0) {
        evenSum = evenSum + i;
      } else {
        oddSum = oddSum + i;
      }
    }
  }

  console.log("Sum of even numbers:", evenSum);
  console.log("Sum of odd numbers:", oddSum);
}

sum(2, 4);



// // Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// // Пример: [ 'one', 'two', 'three' ] => 'three'


let arr = ["ЮрийЛьвович","Олег","Петр","ЕвгенийМихайлович","МаргаритаПетровна","НиколайВитальевич","НатальяКонстантиновна"]
let arr1 =[]

function returnStr (stringArr)
{
    if (!stringArr[0]) return null;
    let longestString = stringArr[0] 

    for (let i = 0; i<stringArr.length; i++)
    {
            if (stringArr[i].length>longestString.length)
            {longestString = stringArr[i]}
    }
    return longestString
}
console.log(returnStr(arr)) 
console.log(returnStr(arr1))