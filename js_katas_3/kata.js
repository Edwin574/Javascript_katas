/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)



*/
for (let i = 1; i <= 100; i++){
    console.log(i)
    if(i%3==0 && !i%5==0){
      console.log('Fizz')
      
    }else if(i%5==0&&!i%3==0){
      console.log('Buzz')
     
    }else if(i%3==0 && !i%5==0){
      console.log('FizzBuzz')
     
    }
  }

/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
*/
let i, j
for (i = 0; i <= 7; i++){
  for (j = 0; j < i; j++){
    
    console.log('#'.repeat(i))
   break;
  }
}

/*
#
##
###
####
#####
######
#######
*/