var cibil =735; 



if(cibil>=300 && cibil<580){ //735>=300 && 750<580 F
    console.log("POOR");
}


else if (cibil>=580 && cibil<670) {// 735>=580 && 750<670 F
    console.log("FAIR");
}


else if (cibil>=670 && cibil<740) {// 735>=670 && 735<740 T
    console.log("GOOD");           //print
}


else if (cibil>=740 && cibil<800) {
    console.log("VERY GOOD");
}


else if (cibil>=800 && cibil<851) {
    console.log("EXCELLENT");
}


else{
    console.log("Invalid");
}