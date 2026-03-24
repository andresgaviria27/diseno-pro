import './globals.css'
export const metadata = { title: 'Diseño Pro', description: 'Landing page para agencia de diseño que muestra servicios y portfolio de la agencia. Permite a los clientes contactar con la agencia de manera fácil y rápida.' }
export default function RootLayout({ children }) {
  return (<html lang='es'><body>{children}</body></html>)
}
