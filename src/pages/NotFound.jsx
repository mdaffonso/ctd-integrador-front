import Meta from "../components/Meta"
import { Container } from "react-bootstrap"

export default function NotFound(){
    return(
        <>
            <Meta title="Página Não Encontrada" />
            <Container>
                <div className="text-center">
                    <img src="https://http.cat/404" alt="404 Not found" />
                </div>
            </Container>
        </>
    )
}