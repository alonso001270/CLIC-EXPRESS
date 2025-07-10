
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Bienvenido a Clic Express 🚀</h1>
      <p>Inspirado en Pedidos Ya, esta es tu nueva app de delivery.</p>
      <nav style={{ marginTop: '2rem' }}>
        <a href="/explorar" style={{ marginRight: 20 }}>Explorar</a>
        <a href="/pedido">Hacer Pedido</a>
      </nav>
    </div>
  )
}
