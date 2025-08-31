import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Cover, Background, Info, Containermovies, Details } from "./styles";
import { getimages } from '../../utils/getimages'
import Spangenres from "../../components/Spangenres";
import Credits from "../../components/Credits";
import { getMoviebyid, getMovievideos, getMoviecredits, getMoviesimilar } from "../../services/getDatas";
import Slides from "../../components/Slides";
function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {

        async function getAlldatas() {
            Promise.all([
                getMoviebyid(id),
                getMovievideos(id),
                getMoviecredits(id),
                getMoviesimilar(id)

            ]).then(([movie, videos, credits, similar]) => {
                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            })
                .catch((error) => console.error(error))
        }
        getAlldatas()
    }, [])

    return (
        <>
            {movie && (
                <>
                <Details>

                    <Background $image={getimages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getimages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <Spangenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                        <div></div>
                    </Container>
                    <Containermovies>
                        {movieVideos && movieVideos.map((video) => (
                            <div key={video.id}>
                                <h4>
                                    {video.name}
                                </h4>
                                <iframe src={`https://www.youtube.com/embed/${video.key}`}
                                    title='video player'
                                    height='500px'
                                    width='100%'
                                    
                                    ></iframe>

                            </div>
                        ))}
                    </Containermovies>
                        </Details>
             
                        {movieSimilar && <Slides info={movieSimilar} title={'Filmes Similares'} />}
                  
                </>
            )
            }
        </>

    )
}
export default Detail