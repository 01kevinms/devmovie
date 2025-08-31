import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import {
    getMoveis,
    getTopmoveis,
    getTopseries,
    getPopularseries,
    getToppeople
} from '../../services/getDatas'
import { getimages } from "../../utils/getimages";
import { Background, Info, Poster, Container, Containerbutton } from '../Home/styles'
import Slides from '../../components/Slides';

function Home() {
    const [showmodal, setshowmodal] = useState(false)
    const [movie, setMovie] = useState()
    const [Topmovei, setTopmovie] = useState()
    const [Topseries, setTopseries] = useState()
    const [Popularseries, setPopularseries] = useState()
    const [Toppeople, setToppeople] = useState()
    const navigate = useNavigate()


    useEffect(() => {

        async function Alldatas() {
            Promise.all([
                getMoveis(),
                getTopmoveis(),
                getTopseries(),
                getPopularseries(),
                getToppeople()

            ]).then(([movie, Topmovei, Topseries,Popularseries,Toppeople])=> {

                setMovie(movie)
                setTopmovie(Topmovei)
                setTopseries(Topseries)
                setPopularseries(Popularseries)
                setToppeople(Toppeople)
            }).catch((error) => console.error(error))
        }
        Alldatas()
    }, [])

    return (
        <>
            {movie && (

                <Background $img={getimages(movie.backdrop_path)}>
                    {showmodal && (

                        <Modal movieId={movie.id} setshowmodal={setshowmodal} />
                    )}
                    <Container>
<div className='previ'>

                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </Info>
</div>
<div className='movpre'>

                        <Containerbutton>
                            <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Assistir Agora</Button>
                            <Button onClick={() => setshowmodal(true)} red={false}>Assistir o Trailer</Button>
                        </Containerbutton>
                        <Poster>
                            <img src={getimages(movie.poster_path)} />
                        </Poster>
</div>

                    </Container>
                </Background>
            )}
            {Topmovei && <Slides info={Topmovei} title={'Top Filmes'} />}
            {Topseries && <Slides info={Topseries} title={'Top Series'} />}
            {Popularseries && <Slides info={Popularseries} title={'Series Popular'} />}
            {Toppeople && <Slides info={Toppeople} title={'Top artistas'} />}
            

        </>
    )
}
export default Home

// FAZER O X DO MODAL