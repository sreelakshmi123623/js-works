for(r=1;r<=5;r++){

    var pattern ="";

    for(space=1;space<=5-r;space++){

            pattern +=" ";

    }
    for(c=1;c<=r;c++){

        pattern +="* ";

    }

    console.log(pattern);

}
