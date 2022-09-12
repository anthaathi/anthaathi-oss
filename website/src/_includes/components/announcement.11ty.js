const style = require('../../utils/styletron');
const { minify } = require('terser');

module.exports = async () => `
<script>${
  (
    await minify(`
function toggleHidden(item) {
  item.classList.add(...${JSON.stringify(
    style
      .renderStyle({
        opacity: 0,
        height: 0,
        maxHeight: 0,
        paddingTop: '0!important',
        paddingBottom: '0!important',
      })
      .split(' '),
  )})
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-toggle]').forEach(value => {
    const element = document.querySelector(value.dataset.toggle);
    element.classList.add(...${JSON.stringify(
      style
        .renderStyle({
          transition: 'all .1s ease',
        })
        .split(' '),
    )})
    
    value.addEventListener('click', function() {
      toggleHidden(element)
    })
  })
});
`)
  ).code
}</script>
<div id="annoucement" class='${style.renderStyle({
  paddingTop: '12px',
  paddingBottom: '12px',
  paddingLeft: '12px',
  paddingRight: '28px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#262626',
  color: '#FFF',
  position: 'relative',
  overflow: 'none',
})}'>
    <div class="${style.renderStyle({
      margin: '0 auto',
      color: '#DDD',
      fontSize: 600,
      fontFamily: '.6rem',
    })}">
        Use this discrete top bar for site-wide announcements, important messages and more.
    </div>
    <div class="${style.renderStyle({
      position: 'absolute',
      right: '24px',
      cursor: 'pointer',
      height: '42px',
      display: 'flex',
      alignItems: 'center',
    })}">
     <span class="fa fa-remove" data-toggle="#annoucement" aria-hidden="true"></span> 
    </div>
</div>
`;
