// write a program using for loop to print numbers from 1 to N, skipping multiplies of 3
var num= 10;
for(i=1;i<=num;i++){//i=1 i<=10->T
   
    if (i%3==0) {//1%3!=0->T
        continue;
    }
    console.log(i);
    
}
