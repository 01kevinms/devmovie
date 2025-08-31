import { getimages } from "../../utils/getimages";
import { Container } from "./styles";

function Card({ item }) {
    return (
        <Container>
            <img src={getimages(item.poster_path || item.profile_path || '')} />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}
export default Card