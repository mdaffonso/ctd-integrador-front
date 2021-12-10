import Meta from "../components/Meta";
import { Container, Col, Row } from "react-bootstrap";
import Colaborador from '../components/Colaborador';
import styles from './Sobre.module.scss';

export default function Sobre(){

    const equipe = [
        {
            nome:"Vinicius Mendes",
            imagem: "https://avatars.githubusercontent.com/u/83781987?v=4",
            desc: "Desenvolvedor full-stack júnior. Mora em Brasília-DF",
            linkedin: "https://www.linkedin.com/in/viniciusmendesdasilva/",
            github: "https://github.com/VinnyMendes"
        },
        {
            nome:"Jonathan Coutinho",
            imagem: "https://avatars.githubusercontent.com/u/85229845?v=4",
            desc: "Desenvolvedor full-stack júnior. Mora no Rio de Janeiro-RJ",
            linkedin: "https://www.linkedin.com/in/jqc-eng/",
            github: "https://github.com/JonathanCout"
        },
        {
            nome:"Matheus Affonso",
            imagem: "https://avatars.githubusercontent.com/u/75502155?v=4",
            desc: "Desenvolvedor full-stack Pleno. Mora em Porto Alegre-RS",
            linkedin: "https://www.linkedin.com/in/matheus-affonso-42712869/",
            github: "https://github.com/mdaffonso"
        },
        {
            nome:"Adryana Portugal",
            imagem: "https://avatars.githubusercontent.com/u/85203403?v=4",
            desc: "Desenvolvedora front-end júnior. Mora no Rio de Janeiro-RJ",
            linkedin: "https://www.linkedin.com/in/adryanaportugal/",
            github: "https://github.com/AdryanaP"
        },
        {
            nome:"Felipe Rosa",
            imagem: "https://avatars.githubusercontent.com/u/81764437?v=4",
            desc: "Estágio em back-end. Mora no Rio de Janeiro-RJ",
            linkedin: "https://www.linkedin.com/in/felipe-s-rosa/",
            github: "https://github.com/felipsrosa"
        },
    ]

    return(
        <>
            <Meta title="Sobre" />
            <Container>
                <h1>Sobre nossa equipe</h1>
                    <Row className={styles.linha}>
                        {
                            equipe.map((inimigo)=>(
                                <Col sm={12} md={6} lg={4} xl={3} key={inimigo.nome}>
                                    <Colaborador image={inimigo.imagem}
                                    nome={inimigo.nome} 
                                    descricao={inimigo.desc}
                                    linkedin={inimigo.linkedin}
                                    github={inimigo.github} />
                                </Col>
                            ))
                        }
                    </Row>
            </Container>
        </>
    )
}