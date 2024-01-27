
import {useEffect, useState } from "react";
import Movie from "../components/Movie";


function Home() {
    const [loading, SetLoading] = useState(true);
    const [movies, SetMovies] = useState([]);
  
    const getMovies = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'`)
        ).json();
        SetMovies(json.data.movies);
        SetLoading(false);  //처음에 Loding상태가 true였으니 movie data를 받아 상태를 업데이트하면 false로 바꿔줘야함
      };
      useEffect(() => {
        getMovies();  //한번만 실행시키기 위해 useEffect사용
      }, []);
      
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie 
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}/>
              ))} 
            </div>  //key는 무조건 고유의 값이므로 movie.id로 설정
          )}
     </div>
    );
 }


export default Home;