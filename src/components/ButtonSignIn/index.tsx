import './styles.css';

export function ButtonSignIn() {
  return (
    <>
      <div className="button-container">
        <a className='button-link' href="/SignIn">Login</a>
        <p>|</p>
        <a className='button-link' href="/SignIn">Cadastro</a>
      </div>
    </>
  )
}