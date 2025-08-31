import { Container} from "./styles";
function Spangenres({ genres}) {
    
    return (
       <Container>
       {genres && genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
       </Container>

    )
}
export default Spangenres