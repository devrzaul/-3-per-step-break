// Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

for( let i = 1; i <= 100; i = i + 3){

    console.log(`Loop increment by 3 step and divisible by 11 using break : ${i} `);
    
   if( i % 11 == 0){
      break;
      
   }
}