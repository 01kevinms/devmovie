import { useState, useEffect } from "react";
import { Container, Background } from "./styles";
import { getMovievideos } from "../../services/getDatas";
function Modal({ movieId, setshowmodal }) {
    const [movie, setMovies] = useState()
    useEffect(() => {

        async function getMoveis() {
          setMovies(await getMovievideos(movieId))
        }
        getMoveis()
    }, [])
    return (
        <Background onClick={()=> setshowmodal(false)}>
            {movie && (
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie[0]}`}
                        title='video player'
                        height='500px'
                        width='100%'

                    ></iframe>
                </Container>
            )}
        </Background>

    )
}
export default Modal