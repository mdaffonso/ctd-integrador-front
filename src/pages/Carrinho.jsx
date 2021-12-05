import Meta from "../components/Meta"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Container, ListGroup, Image, Row, Col, Button } from 'react-bootstrap'
import { CartContext } from "../contexts/CartContext"

export default function Carrinho () {
	const { items, addToCart, removeFromCart } = useContext(CartContext)

	return (
		<>
			<Meta title="Carrinho de Compras" />
			<Container>
				<h1>Carrinho de Compras</h1>

				<Row>
					<Col md={8}>
							{ items.length === 0 ? (
									<p style={{maxWidth: "50ch"}}>O seu carrinho de compras está vazio. Os itens que você adicionar aparecerão aqui. <Link to='/'>Clique aqui para retornar para a página inicial</Link></p>
							) : (
									<ListGroup variant='flush'>
											{items.map(item => (
													<ListGroup.Item key={item.id}>
															<Row>
																	<Col md={2} className="p-4">
																			<Image src={item.image} alt={item.title} fluid rounded />
																	</Col>

																	<Col md={6} className="d-flex align-items-center">
																			<Link style={{textDecoration: "none"}} to={`/produtos/${item.id}`}>{item.title}</Link>
																	</Col>

																	<Col md={2} className="d-flex align-items-center">
																			R$ {item.price.toFixed(2)}
																	</Col>

																	<Col md={2} className="d-flex justify-content-between align-items-center">
																			<Button onClick={() => removeFromCart(item)}>-</Button>
																			<span>{item.quantity}</span>
																			<Button onClick={() => addToCart(item)}>+</Button>
																	</Col>
															</Row>
													</ListGroup.Item>
											))}
									</ListGroup>
							)}
					</Col>
					{ items.length > 0 && (
						<Col md={4}>
							<ListGroup variant='flush'>
									<ListGroup.Item>
											<h2>Subtotal:</h2>
											<h3>{items.reduce((acc, item) => acc + item.quantity, 0)} {items.reduce((acc, curr) => acc + curr.quantity, 0) === 1 ? "item" : "itens"}</h3>
											<h3 className="mt-3">R$ {items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
									</ListGroup.Item>
									<ListGroup.Item>
											<Button type="button" className="btn-block" disabled={items.length === 0}>Confirmar a Compra</Button>
									</ListGroup.Item>
							</ListGroup>
						</Col>
					)}
				</Row>

			</Container>
		</>
	)
}