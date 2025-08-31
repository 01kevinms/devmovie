import { useEffect, useState } from "react"

import Slides from "../../components/Slides"
import { getNowmovie, getUpcoming } from "../../services/getDatas";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
function Movie() {
    const { id } = useParams()
    const [nowmovie, setNowmovie] = useState()
    const [update, setUpcoming]= useState()
   useEffect(()=>{
    async function Aldatas() {
               Promise.all([
                getNowmovie(),
                getUpcoming()
   
               ]).then(([now,up])=> {

            setNowmovie(now)
            setUpcoming(up)
                  
               }).catch((error) => console.error(error))
           }
           Aldatas()
       }, [])
    return(
        <Container >
        
            

  {nowmovie && <Slides info={nowmovie} title={'Ver agora'} />}
   {update && <Slides info={update} title={'Atualizados'} />}
        </Container>
    )
}
export default Movie