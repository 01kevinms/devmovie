import { useEffect, useState } from "react"
import { getPopularseries, getSeriesair, getSeriestoday } from "../../services/getDatas"
import { Capa, Container } from "./styles"
import Slides from "../../components/Slides"


function Series() {
const [series, setSeries]= useState()
const [seriesair, setSeriesair]= useState()
const [popularseries, setPopularseries]= useState()

     useEffect(()=>{
    async function Aldatas() {
               Promise.all([
                  getSeriestoday(),
                  getSeriesair(),
                  getPopularseries()
   
               ]).then(([ today, air,popular])=> {
   
                   setSeries(today)
                  setSeriesair(air)
                  setPopularseries(popular)
               }).catch((error) => console.error(error))
           }
           Aldatas()
       }, [])
    return(
        <Container>
        {Series &&(

           
                <Capa>

                </Capa>
 
        )}

  {series && <Slides info={series} title={'Series de Hoje'} />}
   {seriesair && <Slides info={seriesair} title={'Series no ar'} />}
   {popularseries && <Slides info={popularseries} title={'Populares'} />}
        </Container>
    )

}

export default Series