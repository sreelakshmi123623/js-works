var std={
    marks:[20,30,50],
    total(){
        return this.marks.reduce((a,b)=>a+b)
    },
    average(){
        return this.total()/this.marks.length
    }
}
console.log(std.total());
console.log(std.average());

