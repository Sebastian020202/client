import './Paginacion.style.css'
const Paginacion = ({ gamePerPage, games, paginado }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(games / gamePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='paginado'>
        {pageNumbers ?
          pageNumbers.map((number) => {
            return (
              <li className='number' key={number}>
                <button onClick={() => paginado(number)}>{number}</button>
              </li>
            )
          }):null}
      </ul>
    </nav>
  )
}

export default Paginacion
