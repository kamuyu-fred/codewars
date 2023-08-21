function validSpacing(string) {
  // write your code here
  

  return string =='' ? true : string.split(' ').find(el=> el=='') >= 0 ? false : true

}