document.title = `${scene.titleFull} by co*de^sign`;
changeFavicon('https://co-de-sign.herokuapp.com/img/favicon00.png');
googleFonts('https://fonts.googleapis.com/css?family=Source+Code+Pro:400')
window.addEventListener("load", menu, false);


function menu(){
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  menu.style.cssText = 'position:absolute;width:100px;height:120px;top:15px; left:15px; display:flex;align-items:left;justify-content:top;background:#fff; z-index:100; padding:0.5rem; background-color: #111; opacity: 0.8';
  menu.id = "menu";
  list.style.cssText = 'list-style-type: none; margin: 0; padding: 0; font-family: "Source Code Pro", monospace;';
  document.body.appendChild(menu);
  menu.appendChild(list);

  const eventList = [
    'Mouse1: Bounce',
    '&nbsp;',
    'M: Menu',
    'S: Pause/Play', 
    '↑: Add',
    '↓: Remove', 
    '←: Slower',
    '→: Faster', 
    'C: Color',
    'S: Save', 
  ]

  for (let i = 0; i < eventList.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = eventList[i];
    listItem.style.cssText = 'font-size:0.5rem; color: #fff';
    list.appendChild(listItem);;
  }

  };

function toggleMenu() {
  let x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function changeFavicon(src) {
  var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
   document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
 }

function googleFonts(src) {
  var link = document.createElement('link');
  link.id = 'menu-font';
  link.rel = 'stylesheet';
  link.href = src;
  document.head.appendChild(link);
}