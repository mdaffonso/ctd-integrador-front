import { Helmet } from "react-helmet-async"

export default function Meta ({title, description, keywords, favicon}) {
  return (
    <Helmet>
      <title>CTD Commerce | {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>
  )
}

Meta.defaultProps = {
  description: "A loja que entende as suas necessidades! Aqui você vai encontrar exatamente o que precisa.",
  keywords: "joias, eletrônicos, roupas, acessórios, eletrodomésticos",
  favicon: "/images/rettiwt.png"
}