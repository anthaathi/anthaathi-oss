const style = require('../../utils/styletron');
const theme = require('../../utils/theme');
const {
  button,
  largeButton,
  globalNavbar,
} = require('../../components/components');

const navigation = [
  {
    title: 'PRODUCTS',
    href: '/products',
  },
  {
    title: 'SERVICES',
    href: '/services',
  },
  {
    title: 'ABOUT US',
    href: '/about-us',
  },
  {
    title: 'GITHUB',
    href: 'https://github.com/anthaathi',
  },
];

module.exports = () => `
  <nav class="${style.renderStyle({
    backgroundColor: 'hsla(0, 0%, 100%, 0.75)',
    ':hover': {
      backgroundColor: '#FFF',
      boxShadow: '',
    },
    transition: 'background-color ease .1s',
    backdropFilter: 'blur(3px)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  })}">
    <div class="${style.renderStyle({
      maxWidth: '1344px',
      display: 'flex',
      margin: '0 auto',
      alignItems: 'center',
      height: '70px',
      padding: '0 1rem',
      [theme.mediaQuery.medium]: {
        padding: '0 3rem',
      },
    })}">
        <span class="${style.renderStyle({
          fontSize: '1.1rem',
          marginRight: '2rem',
        })}">
          Anthaathi
        </span>

        <div class="${style.renderStyle({
          display: 'none',
          [theme.mediaQuery.medium]: {
            display: 'block',
          },
        })}">
        ${navigation.map((nav) => button(nav.title, nav.href)).join('')}
</div>
        
        <span class="${style.renderStyle({
          flexGrow: 1,
        })}"></span>
        
        ${largeButton(`CONTACT US`)}
    </div>
  </nav>
  ${globalNavbar()}
`;
