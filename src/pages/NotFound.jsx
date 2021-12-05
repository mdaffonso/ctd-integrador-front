import Meta from "../components/Meta"

export default function NotFound(){
    return(
        <>
            <Meta title="Página Não Encontrada" />
            <div className="text-center">
                <img src="https://http.cat/404" alt="404 Not found" />
            </div>
        </>
    )
}