const style = require('../utils/styletron');
const theme = require('../utils/theme');

function largeButton(children, href) {
  return `
    <a class="${style.renderStyle({
      border: 'none',
      ':hover': {
        backgroundColor: '#222',
      },
      padding: '.8rem 2rem',
      fontWeight: 800,
      backgroundColor: '#000',
      color: '#FFF',
      transition: 'background-color .1s ease',
      cursor: 'pointer',
      fontSize: '.8rem',
      textDecoration: 'none',
    })}" href="${href}">
      ${children}
    </a>`;
}

function button(children, href) {
  return `
    <a href="${href}" target="${
    href.startsWith('https://') ? '_blank' : '_self'
  }" class="${style.renderStyle({
    border: 'none',
    ':hover': {
      backgroundColor: '#EEE',
    },
    padding: '.3rem .8rem',
    borderRadius: '10px',
    fontWeight: 500,
    fontSize: '.85rem',
    backgroundColor: 'transparent',
    transition: 'background-color .1s ease',
    cursor: 'pointer',
    fontFamily: "'IBM Plex Sans', sans-serif",
    textDecoration: 'none',
    color: '#444',
  })}">${children}</a>
  `;
}

function hero(
  children,
  { light, color, minHeight, padding, $style } = {
    light: false,
    color: '',
    minHeight: '20vh',
  },
) {
  return `
      <div class="${style.renderStyle({
        minHeight: minHeight ?? '20vh',
        backgroundColor: light ? '#FFF' : color ?? '#f4f3ef',
        padding: padding ?? '0 1rem',
        [theme.mediaQuery.medium]: {
          padding: '0 2rem',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        placeContent: 'center',
        ...($style || {}),
      })}">
        ${children}    
      </div>
    `;
}

function globalNavbar() {
  return `
      <div id="global-bar">
      </div>
    `;
}

module.exports = {
  largeButton,
  button,
  hero,
  globalNavbar,
};
