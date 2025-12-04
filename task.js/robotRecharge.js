//a robot starts with 0% battery ,keep adding 20% per loop and print "charging...battery at X%" 
// stop when battery reaches 100% and print "fully charged!"

var i =20;

var current = 0;


while (current<100) {//0<=100->T
    if (current==0) {
        console.log(`Charging battery at ${current}%`);
        
    }
    current = current+i;
    console.log(`Charging battery at ${current}%`);
    
}
console.log(`Fully charged ${current}%`);
