function forLoop(arr){

  for (i=0;i<25;++i){

      console.log("I am "+i+" strange loop"+ (i === 0 ? '' : 's')+".")
      arr.push("I am "+i+" strange loop"+ (i === 0 ? '' : 's')+".")
  }
  return arr
}

function whileLoop(n){

  while (n>0) {
    console.log(--n)
  }

  return "done"

}

function doWhileLoop(arr){
do {
  arr.pop()
} while (arr.length > 0 && maybeTrue());
return arr
}

function maybeTrue() {
  return Math.random() >= 0.5
}
