class Movie{
    setMovie(id,title,language,genre){
        this.id=id
        this.title=title
        this.language=language
        this.genre=genre
    }
    displayMovies(){
        console.log(this.id,this.title,this.language,this.genre);
        
    }
}
var movieInstance=new Movie()

var movie2Instance = new Movie()

movieInstance.setMovie(234,"KGF","hindi","thriller")

movieInstance.displayMovies()

movie2Instance.setMovie(123,"coco","English","kids")

movie2Instance.displayMovies()


