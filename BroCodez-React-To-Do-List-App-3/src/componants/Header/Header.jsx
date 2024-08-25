import './Header.css'

const Header = (params) => {
  return (
    <header>
        <h2>Header</h2>
        <h3>Title</h3>
        <h1>TodoList App</h1>
        <hr />
        <h3>NavBar</h3>
        <nav>
            <u>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
            </u>
        </nav>
    </header>
  )
}

export default Header