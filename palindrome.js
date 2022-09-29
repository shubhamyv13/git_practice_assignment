function palindrom(str){

let r_str="";

for(let i=0; i<=str.length; i++){
   r_str= str[i] + r_str;
}

if(str===r_str){
  return true;
}
else{
  return false;
}

}