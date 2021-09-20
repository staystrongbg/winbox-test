const contactContent = document.querySelector('#contact-content');
const aboutContent = document.querySelector('#about-content');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const folder = document.querySelector('#folder');
const cursor = document.querySelector('.cursor');
const sign = document.querySelector('#sign');

(function updateUI() {
  document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.id === 'about') {
      folder.innerHTML = `~/about<span id="sign">$</span> <span class="cursor">|</span>`;
      openWindow();
      WinBox({
        title: 'About me',
        width: innerWidth > 800 ? '600px' : '200px',
        height: innerWidth > 800 ? '600px' : '200px',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        mount: aboutContent,
        onfocus() {
          this.setBackground('#00aa00');
          folder.innerHTML = `~/about<span id="sign">$</span> <span class="cursor">|</span>`;
        },
        onblur() {
          this.setBackground('#777');
        },
        onclose() {
          closeWindow();
        },
      });
    } else {
      folder.innerHTML = `~/contact<span id="sign">$</span> <span class="cursor">|</span>`;
      openWindow();
      new WinBox({
        title: 'contact me',
        width: innerWidth > 800 ? '600px' : '200px',
        height: innerWidth > 800 ? '600px' : '200px',
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        mount: contactContent,
        onfocus() {
          this.setBackground('#00aa00');
          folder.innerHTML = `~/contact<span id="sign">$</span> <span class="cursor">|</span>`;
        },
        onblur() {
          this.setBackground('#777');
        },
        onclose() {
          closeWindow();
        },
      });
    }
  });
})();

const openWindow = () => {
  folder.classList.remove('hidden');
  cursor.classList.add('hidden');
  sign.classList.add('hidden');
};

const closeWindow = () => {
  folder.classList.add('hidden');
  cursor.classList.remove('hidden');
  sign.classList.remove('hidden');
};
