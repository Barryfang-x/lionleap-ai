const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', window.siteText('打开导航'));
  nav.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', window.siteText(open ? '关闭导航' : '打开导航'));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);

const copyButton=document.querySelector('.copy-wechat');
copyButton?.addEventListener('click',async()=>{
 const status=document.querySelector('.copy-status');
 try{await navigator.clipboard.writeText('Lionleap');status.textContent=window.siteText('已复制微信号 Lionleap');}
 catch{status.textContent=window.siteText('请手动复制微信号：Lionleap');}
});
