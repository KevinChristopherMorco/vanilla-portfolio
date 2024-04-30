const heroImage = document.querySelector('.hero__start-img > img')
const heroTheme = document.querySelector('.hero__theme-container')
const heroMotto = document.querySelectorAll('.hero__container .hero__info .hero__motto-container>p')

const hamburgerIcon = document.querySelector('.nav__hamburger-container')
const hamburgerWrapper = document.querySelector('.hamburger__wrapper')
const hamburgerContent = document.querySelector('.hamburger__container')
const hamburgerOverlay = document.querySelectorAll('.hamburger__overlay-bg')

const closehamburgerWrapper = document.querySelector('.close-hamburger')

hamburgerIcon.addEventListener('click', (e) => {
    hamburgerWrapper.classList.add('show')
})

closehamburgerWrapper.addEventListener('click', (e) => {
    hamburgerContent.style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${0.5}s;`

    let setDelay = 0
    let reverseCount = hamburgerOverlay.length
    for (let i = 0; i < hamburgerOverlay.length; i++) {
        reverseCount -= 1
        hamburgerOverlay[reverseCount].style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${setDelay}s;`
        setDelay += 0.2
    }

    setTimeout(() => {
        hamburgerWrapper.classList.remove('show')
        hamburgerOverlay.forEach(overlay => {
            overlay.removeAttribute('style')
        })
        hamburgerContent.removeAttribute('style')
    }, 1000)
})



const imagePath = ['pictures/hero/magnifying-glass.png', 'pictures/hero/visualize.png', 'pictures/hero/computer.png']
const mottoClass = ['first', 'second', 'third']

const imageLoad = () => {
    let counter = 1

    setInterval(() => {
        heroMotto.forEach((motto, index) => {
            motto.classList.remove(`hero__motto--focus--${mottoClass[index]}`);
        });

        heroImage.setAttribute('src', imagePath[counter])
        heroMotto[counter].classList.add(`hero__motto--focus--${mottoClass[counter]}`)
        if (counter === imagePath.length - 1) {
            counter = 0
            return
        }
        counter += 1
    }, 2000)
}
imageLoad()




//Manipulate theme
const lightTheme = document.getElementById('light-theme')
const darkTheme = document.getElementById('dark-theme')
const brownTheme = document.getElementById('brown-theme')
const blueTheme = document.getElementById('blue-theme')

heroTheme.addEventListener('click', (e) => {


    if (e.target.classList.contains('hero__theme')) {
        const theme = Array.from(heroTheme.children);
        theme.forEach(theme => {
            theme.classList.remove('hero__theme--active')
        })
        e.target.classList.add('hero__theme--active')
    }
})

// Dark theme colors
const darkThemeColor = {
    '--body-bg': '#000',
    '--component-bg': '#000',
    '--text-color': '#fff',
    '--btn-component-bg-focus': '#fff',
    '--btn-component-text-focus': '#000',
    '--border-color': '#fff',

    '--first-theme-gradient': '#007bff',
    '--second-theme-gradient': '#e83e8c',
    '--third-theme-gradient': '#00F7F7',
    '--fourth-theme-gradient': '#ffc107',
    '--fifth-theme-gradient': '#fd7e14',
    '--sixth-theme-gradient': '#20c997',

    '--first-overlay': '#FEFAF6',
    '--second-overlay': '#E0E0E0',
};


// Light theme colors
const lightThemeColor = {
    '--body-bg': '#e0e0e0',
    '--component-bg': '#ffffff',
    '--text-color': '#263238',
    '--btn-component-bg-focus': '#DA0170',
    '--btn-component-text-focus': '#ffffff',
    '--border-color': '#90a4ae',

    '--first-theme-gradient': '#DA0170',
    '--second-theme-gradient': '#EE99C2',
    '--third-theme-gradient': '#29ADB2',
    '--fourth-theme-gradient': '#4CC34F',
    '--fifth-theme-gradient': '#4D4C7D',
    '--sixth-theme-gradient': '#F99417',

    '--first-overlay': '#DA0170',
    '--second-overlay': '#874CCC',
};

const brownThemeColor = {
    '--body-bg': '#ECCA9C', // Light brown background
    '--component-bg': '#DAA879', // Lighter brown component background
    '--text-color': '#3d291e', // Dark brown text color
    '--btn-component-bg-focus': '#5c3d30', // Dark brown button background
    '--btn-component-text-focus': '#fff',
    '--border-color': '#7B5228', // Light brown border color

    '--first-theme-gradient': '#E86260',
    '--second-theme-gradient': '#43766C',
    '--third-theme-gradient': '#453F78',
    '--fourth-theme-gradient': '#795458',
    '--fifth-theme-gradient': '#6D2932',
    '--sixth-theme-gradient': '#D24545',

    '--first-overlay': '#5C3D30',
    '--second-overlay': '#9B3922',
};

const blueThemeColor = {
    '--body-bg': '#e0f7fa',
    '--component-bg': '#ffffff',
    '--text-color': '#37474f',
    '--btn-component-bg-focus': '#2196f3',
    '--btn-component-text-focus': '#ffffff',
    '--border-color': '#90a4ae',

    '--first-theme-gradient': '#874CCC',
    '--second-theme-gradient': '#C65BCF',
    '--third-theme-gradient': '#EEC759',
    '--fourth-theme-gradient': '#B1C381',
    '--fifth-theme-gradient': '#210062',
    '--sixth-theme-gradient': '#77037B',

    '--first-overlay': '#2196F3',
    '--second-overlay': '#9400FF',
};

const setTheme = (selectedTheme) => {
    Object.entries(selectedTheme).forEach(key => {
        document.documentElement.style.setProperty(key[0], key[1])
    })
}

lightTheme.addEventListener('click', (e) => {
    setTheme(lightThemeColor)
})

darkTheme.addEventListener('click', (e) => {
    setTheme(darkThemeColor)
})

brownTheme.addEventListener('click', (e) => {
    setTheme(brownThemeColor)
})

blueTheme.addEventListener('click', (e) => {
    setTheme(blueThemeColor)
})







const nextSection = document.querySelector('.about__extra-info')

const mainSection = document.querySelector('.main__content-container')
const nextContent = document.querySelector('.next__content-container')
const header = document.querySelector('.nav__main-container')


let nextPage = () => {
    nextSection.addEventListener('click', (e) => {

        mainSection.style.cssText = 'display:none;'
        nextContent.style.cssText = 'display:block;'
        header.style.cssText = 'animation:opacity 2s forwards;'

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        changeList()

    })
}
nextPage()












const hamburgerList = document.querySelector('.hamburger__wrapper .hamburger__container .hamburger__content > ul')
const mainList = document.querySelector('.nav__main-container > ul')

const changeList = () => {
    while (hamburgerList.firstChild) {
        hamburgerList.removeChild(hamburgerList.firstChild);
    }

    while (mainList.firstChild) {
        mainList.removeChild(mainList.firstChild);
    }

    const listName = ['Home', 'Skills', 'Stacks', 'Random', 'Contacts']
    const listId = ['home', 'skills', 'stacks', 'random', 'contact']



    for (let i = 0; i < listName.length; i++) {
        const createList = document.createElement('li')
        hamburgerList.appendChild(createList)
        mainList.appendChild(createList)
        const createAnchor = document.createElement('a')
        if (i === 0) {
            createAnchor.setAttribute('íd', 'home')
            createAnchor.addEventListener('click', (e) => {
                while (mainList.firstChild) {
                    mainList.removeChild(mainList.firstChild);
                }
                mainSection.style.cssText = 'display:block;'
                nextContent.style.cssText = 'display:none;'
                header.style.cssText = 'animation:opacity 2s forwards;'
                const listName = ['About', 'Projects', 'Contacts']
                const listId = ['about', 'project', 'contact']

                for(let i=0;i<listName.length;i++){
                    const createList = document.createElement('li')
                    mainList.appendChild(createList)

                    const createAnchor = document.createElement('a')
                    createAnchor.href = `#${listId[i]}`
                    createAnchor.textContent = `${listName[i]}`
                    createList.appendChild(createAnchor)
                }

               



                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;

            })

        }
        createAnchor.href = `#${listId[i]}`
        createAnchor.textContent = `${listName[i]}`
        createList.appendChild(createAnchor)
    }
}

hamburgerList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburgerContent.style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${0.5}s;`

        let setDelay = 0
        let reverseCount = hamburgerOverlay.length
        for (let i = 0; i < hamburgerOverlay.length; i++) {
            reverseCount -= 1
            hamburgerOverlay[reverseCount].style.cssText = `animation:hamburgerAnimationReverse 0.5s ease-in-out; animation-delay: ${setDelay}s;`
            setDelay += 0.2
        }

        setTimeout(() => {
            hamburgerWrapper.classList.remove('show')
            hamburgerOverlay.forEach(overlay => {
                overlay.removeAttribute('style')
            })
            hamburgerContent.removeAttribute('style')
        }, 1000)
    }
})

const warning =  document.querySelector('.project__card-container')

warning.addEventListener('click', (e)=>{
    if(e.target.classList.contains('project__live-site')){
        Swal.fire({
            title: "Coming Soon: Live Site Launch!",
            text: "Wait for exciting updates!",
            icon: "warning"
          });
    }
})
