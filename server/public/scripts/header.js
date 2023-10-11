const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img')
headerLogo.className = 'header-Logo'
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1');
headerTitle.textContent = `unEarthed`;

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div')
headerRight.className = 'header-right';

// headerLeft.className = 'header-left';

const headerButton = document.createElement('Home');
headerButton.className = 'header-button'
headerButton.textContent = 'Home';
headerButton.addEventListener('click', function handleClick(event){
    window.location = '/'});

headerRight.appendChild(headerButton);

headerContainer.append(headerLeft);
headerContainer.append(headerRight);

header.appendChild(headerContainer);