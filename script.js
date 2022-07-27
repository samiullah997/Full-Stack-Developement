const xIcon = document.getElementById('x-icon');
const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');
function setVersion(size) {
  if (size.matches) {
    menuIcon.style.display = 'none';
    xIcon.style.display = 'flex';
    menuItems.style.display = 'flex';
    xIcon.addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-home').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-about').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-contact').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-developers').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
  }
}
menuIcon.addEventListener('click', () => {
  const size = window.matchMedia('(max-width: 768px)');
  setVersion(size);
});

const topDevelopers = [
  {
    profileUrl: 'https://static.igem.org/mediawiki/2021/b/ba/T--MIPT_MSU--Lera.png',
    name: 'Dmitrii Vladimirtsev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://static.igem.org/mediawiki/2021/c/c6/T--MIPT_MSU--Pavel.png',
    name: 'Ilya Zubarev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://static.igem.org/mediawiki/2021/2/2b/T--MIPT_MSU--Ilya.png',
    name: 'Anton Derzhaev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://static.igem.org/mediawiki/2021/e/e1/T--MIPT_MSU--Dima.png',
    name: 'Pavel Makarevich',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://static.igem.org/mediawiki/2021/b/ba/T--MIPT_MSU--Lera.png',
    name: 'Dmitrii Vladimirtsev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://static.igem.org/mediawiki/2021/b/ba/T--MIPT_MSU--Lera.png',
    name: 'Dmitrii Vladimirtsev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
];

const topArea = document.getElementById('top-area');
topDevelopers.forEach((developerData) => {
  const card = `
    <div class="card">
                <div class="card-body">
                    <img src="${developerData.profileUrl}"
                        alt="Developer-Icon">
                    <div class="card-desc">
                        <h2>${developerData.name}</h2>
                        <p class="desc">${developerData.subDesc}</p>
                        <div class="div-card-line"></div>
                        <p>${developerData.fullDesc}</p>
                    </div>
                </div>
            </div>`;
  topArea.innerHTML += card;
});
const btnMore = document.getElementById('btn-more');
const developer = Array.from(document.querySelectorAll('.top-area .card'));
developer.forEach((card, i) => {
  if (i > 1) {
    card.classList.add('hide');
  }
});

const handleMoreBtn = (developer) => {
  if (developer.classList.contains('hide')) {
    btnMore.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  } else {
    btnMore.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  }
};

btnMore.addEventListener('click', () => {
  developer.forEach((developer, i) => {
    if (i > 1) {
      developer.classList.toggle('hide');
      handleMoreBtn(developer);
    }
  });
});
