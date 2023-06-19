export function Header()
{
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link px-3" href="http://localhost:3000">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3" href="http://localhost:3000/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3" href="http://localhost:3000/project">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3" href="http://localhost:3000/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}