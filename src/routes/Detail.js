import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams(); // id값을 찾아와서 api로부터 정보를 fetch해옴
    const getMovie = async ()=> {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}
export default Detail;