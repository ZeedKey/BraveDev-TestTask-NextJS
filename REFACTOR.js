export function refactored(s, a, b) {
  let str = s.split("");
  return str.length > 1 ? Math.max(str.lastIndexOf(a), str.lastIndexOf(b)) : -1;
}

// РЕФАКТОР 
//
// Делю строку на символы, т.к буду искать аргументы "a" и "b"
// через lastIndexOf
// Т.к обращаться к разделенной строке буду 2 раза,
// то вынес её в переменную
