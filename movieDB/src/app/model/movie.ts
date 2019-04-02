

export class movie{

    vote_count:number;
    id:number;
    video:boolean;
    vote_average:number;
    title:String;
    popularity:number;
    poster_path:String;
    original_language:String;
    original_title:String;
    genre_ids:number[];
    backdrop_path:String;
    adult:boolean;
    overview:String;
    release_date:String; 

    constructor(id, video, title, poster_path, overview, release_date)
    {
        this.id = id
        this.video = video
        this.title = title
        this.poster_path = poster_path
        this.overview = overview
        this.release_date = release_date
    }
}