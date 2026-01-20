let capsOn =false;
function keyClick(key){
     if(capsOn){
    result.value+=key.toUpperCase()
    }
    else{
          result.value+=key

    }
}

function spaceClick(){
    result.value+=" "
}
function enterClick(){
    result.value+="\n"
}

function backSpace(){
   result.value=result.value.slice(0,-1)
}


function capsClick(){
    capsOn=!capsOn
}

function allClear(){
    result.value=""
}