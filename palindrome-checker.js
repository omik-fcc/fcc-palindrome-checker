function palindrome(str) {
  // Good luck!

  let myStr = '';

  // To array > Reverse > To Str > Del Non-Alphanumerics > To Uppercase
  myStr = str.split('').reverse().join('').replace(/[\W_]+/g, '').toUpperCase();

  // Del Non-Alphanumerics > To Uppercase
  str = str.replace(/[\W_]+/g, '').toUpperCase();

  // Control
  // console.log(myStr);
  // console.log(str);

  // If both strings match return true
  if (myStr === str) {
    return true;
  } else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");
