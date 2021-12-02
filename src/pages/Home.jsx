import { Helmet } from "react-helmet";
import SmallSpinner from "../components/SmallSpinner";

export default function Home(){
    return(
        <>
            <Helmet>
                <title>CTD Commerce | Início</title>
            </Helmet>
            <div>
                <h1>VOCÊ ESTÁ NA HOME</h1>
            </div>
            <SmallSpinner/>
        </>
    )
}