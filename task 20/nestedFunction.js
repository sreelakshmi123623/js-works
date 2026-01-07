//print a string

function outerF(text){

    function innerF(text){
        console.log("hello");

    }
    return innerF()
}
return outerF()

//