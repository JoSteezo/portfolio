const navContainer = document.getElementById('mainNav');
const navHTML = 
    `<nav>
        <a href="/index.html">JoSteezo</a>
        <ul>
            <li><a href="./index.html#about">About</a></li>
            <li><a href="./index.html#projects">Projects</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>`;

navContainer.insertAdjacentHTML('afterbegin', navHTML);