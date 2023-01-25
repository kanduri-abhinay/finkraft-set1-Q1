let str1 = "hello";
let str2 = "pioello";
let maxLen = 0;
let res = "";
let dp = [];
for (let i = 0; i < str1.length; i++) {
  dp.push(new Array(str2.length).fill(0));
}
for (let ptr1 = 0; ptr1 < str1.length; ptr1++) {
  for (let ptr2 = 0; ptr2 < str2.length; ptr2++) {
    if (str1[ptr1] == str2[ptr2]) {
      if (ptr1 == 0 || ptr2 == 0) dp[ptr1][ptr2] = 1;
      else dp[ptr1][ptr2] = 1 + dp[ptr1 - 1][ptr2 - 1];
    }
    if (dp[ptr1][ptr2] > maxLen) {
      maxLen = dp[ptr1][ptr2];
      res = str1.substring(ptr1 + 1 - maxLen, ptr1 + 1);
    }
  }
}
console.log(res);
