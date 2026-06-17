const navContainer = document.getElementById('mainNav');
const navHTML = 
    `<nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>`;

navContainer.insertAdjacentHTML('afterbegin', navHTML);