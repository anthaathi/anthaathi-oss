const components = require('../components/components');
const style = require('../utils/styletron');
const theme = require('../utils/theme');

const clients = [
  {
    title: 'NRTC Fresh',
    image: '/public/images/nrtcfresh.png',
    url: 'https://www.nrtcfresh.com',
  },
  {
    title: 'VREKRUT',
    image: '/public/images/vrekrut.svg',
    url: 'https://vrekrut.com/',
  },
  {
    title: 'YH&H',
    image: '/public/images/yhh.png',
    url: 'https://yhh.ae',
  },
  {
    title: 'Arabee Learning',
    image: '/public/images/arabee-logo.webp',
    url: 'https://arabeelearning.com',
  },
];

function renderServices() {
  return `
  <div class="${style.renderStyle({ paddingBottom: '3rem' })}">
    <div class="${style.renderStyle({
      display: 'grid',
      gridTemplateRows: '1fr',
      gridColumnGap: '1rem',
      gridRowGap: '1rem',
      gridTemplateColumns: 'repeat(1, 1fr)',
      [theme.mediaQuery.small]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      [theme.mediaQuery.medium]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.mediaQuery.large]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    })}">
        ${clients
          .map(
            (res) =>
              `<div class="${style.renderStyle({
                height: '260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                placeContent: 'center',
                backgroundColor: '#EEE',
                position: 'relative',
              })}">
                <span class="${style.renderStyle({ flexGrow: 1 })}"></span>

                <img loading="lazy" src="${res.image}" alt="${
                res.title
              }" class="${style.renderStyle({
                width: 'auto',
                maxHeight: '70px',
                height: 'auto',
              })}" />
                <span class="${style.renderStyle({ flexGrow: 1 })}"></span>
                <a href="${res.url}" class="${style.renderStyle({
                textDecoration: 'none',
                width: 'calc(100%)',
              })}">
                <div class="${style.renderStyle({
                  backgroundColor: '#000',
                  padding: '1rem',
                  textAlign: 'center',
                  color: '#FFF',
                  cursor: 'pointer',
                })}">
                ${res.title}
</div>
</a>
</div>`,
          )
          .join(' ')}
</div>
</div>
</div>`;
}

function renderClientHero() {
  return `
    ${components.hero(
      `
      <div class="${style.renderStyle({
        width: '100%',
        maxWidth: '1344px',
        margin: '0 auto',
        color: '#FFF',
      })}">
        <h1 class="${style.renderStyle({
          width: '100%',
          fontSize: '3rem',
          maxWidth: '60%',
        })}">
              Customers are achieving with Bedrock.
        </h1>
        <h2>
        Our Clients
        </h2>
        ${renderClients()}
      </div>
    `,
      { color: '#ce8964' },
    )}
  `;
}

function renderClients() {
  return `
  <div class="${style.renderStyle({ paddingBottom: '3rem' })}">
    <div class="${style.renderStyle({
      display: 'grid',
      gridTemplateRows: '1fr',
      gridColumnGap: '1rem',
      gridRowGap: '1rem',
      gridTemplateColumns: 'repeat(1, 1fr)',
      [theme.mediaQuery.small]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      [theme.mediaQuery.medium]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.mediaQuery.large]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    })}">
        ${clients
          .map(
            (res) =>
              `<div class="${style.renderStyle({
                height: '260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                placeContent: 'center',
                backgroundColor: '#EEE',
                position: 'relative',
              })}">
                <span class="${style.renderStyle({ flexGrow: 1 })}"></span>

                <img loading="lazy" src="${res.image}" alt="${
                res.title
              }" class="${style.renderStyle({
                width: 'auto',
                maxHeight: '70px',
                height: 'auto',
              })}" />
                <span class="${style.renderStyle({ flexGrow: 1 })}"></span>
                <a href="${res.url}" class="${style.renderStyle({
                textDecoration: 'none',
                width: 'calc(100%)',
              })}">
                <div class="${style.renderStyle({
                  backgroundColor: '#000',
                  padding: '1rem',
                  textAlign: 'center',
                  color: '#FFF',
                  cursor: 'pointer',
                })}">
                ${res.title}
</div>
</a>
</div>`,
          )
          .join(' ')}
</div>
</div>
</div>`;
}

module.exports = () => {
  return `
    <div data-aos="zoom-out-up">
    ${components.hero(
      `
          <div class="${style.renderStyle({
            width: '1344px',
            maxWidth: '100%',
          })}">
            <h1 class="${style.renderStyle({
              margin: '0',
              width: '100%',
              fontSize: '3rem',
              maxWidth: '60%',
            })}">
              Development, Cybersecurity, AI, and more.
            </h1>
            <h3 class="${style.renderStyle({ marginBottom: '2.5rem' })}">
              See how we escalate technology and security for the digital age.
            </h3>
            ${components.largeButton('Get Started', '/get-started')}      
          </div>
      `,
      {
        minHeight: '90vh',
        [theme.mediaQuery.medium]: {
          minHeight: '70vh',
        },
      },
    )}
    </div>
  <div data-aos="zoom-out-up">
    ${renderProductHeader()}
  </div>

    ${renderProduct()}
    ${renderProductHeader('About Us')}
    ${renderClientHero()}
  `;
};

function renderProductHeader(title = 'Our Products') {
  return ` 
  ${components.hero(
    `
          <div class="${style.renderStyle({
            width: '1344px',
            maxWidth: '100%',
          })}">
        <h1 class="${style.renderStyle({
          margin: '0',
          width: '100%',
          fontSize: '3rem',
          maxWidth: '100%',
          color: '#000',
        })}">
          ${title}
        </h1>
      </div>

    `,
    {
      minHeight: '14vh',
      color: '#63BF9D3D',
    },
  )}
  `;
}

const products = [
  {
    header: 'Open source E-Commerce platform',
    subHeader:
      'An open source platform end to end for complete E-Commerce solution.',
    reverse: false,
    icon: 'cart-full',
  },
  {
    header: 'Open source CRM',
    subHeader:
      'An open source platform end to end for complete E-Commerce solution.',
    color: '#FFF',
    icon: 'users',
  },
  {
    header: 'Recruitment Platform',
    subHeader: 'An robust platform for recruitment firms.',
    reverse: false,
    icon: 'badge-check',
  },
  {
    header: 'Voter Search Platform',
    subHeader: 'An robust platform for recruitment firms.',
    color: '#FFF',
    icon: 'search',
  },
];

function renderProduct() {
  return `
    ${products
      .map((res) => {
        return components.hero(
          `
          <div class="${style.renderStyle({
            width: '1344px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: res.reverse ? 'row-reverse' : 'row',
            alignItems: 'center',
          })}">
        <div class="${style.renderStyle({
          display: 'flex',
          flexDirection: 'column',
          width: '75%',
          alignItems: res.reverse ? 'end' : 'start',
        })}">
        <h1 class="${style.renderStyle({
          margin: '0',
          width: '100%',
          fontSize: '3rem',
          maxWidth: '100%',
          textAlign: res.reverse ? 'right' : 'left',
        })}">
          ${res.header}
        </h1>
        <h3 class="${style.renderStyle({ marginBottom: '2.5rem' })}">
          ${res.subHeader}
        </h3>
        
        <div>
        ${components.largeButton('View Product')}
</div>

 

</div>

<div class="${style.renderStyle({
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            placeContent: 'center',
          })}">
<span class="fa fa-${res.icon} fa-5x" aria-hidden="true"></span>
</div> 
      </div>

    `,
          {
            color: res.color,
            minHeight: '60vh',
          },
        );
      })
      .map(
        (res) => `<div data-aos="zoom-out-up"
     data-aos-anchor-placement="top-bottom">${res}</div>`,
      )
      .join('')}
  `;
}
