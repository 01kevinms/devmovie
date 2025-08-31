import { getimages } from "../../utils/getimages";
import { Title, Container } from "./styles";
function Credits({ credits }) {
    return (
        <>
            <Title>Creditos</Title>
            {credits && (

                <Container>
                    {credits.slice(0, 5).map((artist)=>(
                        <div key={artist.id}>
                            <img src={getimages(artist.profile_path)} />
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                    <div></div>
                </Container>
            )}
        </>
    )
}
export default Credits