var blockData = [
  {
    'link' : 'https://dasisteinlink.com',
    'head' : 'Dasisteinlink',
    'description' : 'hier steht ein haufen text, den man nur schwer lesen kann aber er saget irgendwas über die seite aus oder so keine ahnung man kann noch viel weiter schreiben aber das wäre nicht nötig ich finde es sehr wichtig immer alles zu leseen was hier steht da sind oft schreibfehler drinnen</p>',
  },
  {
    'link' : 'https://dasisteinlink.com',
    'head' : 'Dasisteinlink',
    'description' : 'hier steht ein haufen text, den man nur schwer lesen kann aber er saget irgendwas über die seite aus oder so keine ahnung man kann noch viel weiter schreiben aber das wäre nicht nötig ich finde es sehr wichtig immer alles zu leseen was hier steht da sind oft schreibfehler drinnen</p>',
  },
  {
    'link' : 'https://dasisteinlink.com',
    'head' : 'Dasisteinlink',
    'description' : 'hier steht ein haufen text, den man nur schwer lesen kann aber er saget irgendwas über die seite aus oder so keine ahnung man kann noch viel weiter schreiben aber das wäre nicht nötig ich finde es sehr wichtig immer alles zu leseen was hier steht da sind oft schreibfehler drinnen</p>',
  },
  {
    'link' : 'https://dasisteinlink.com',
    'head' : 'Dasisteinlink',
    'description' : 'hier steht ein haufen text, den man nur schwer lesen kann aber er saget irgendwas über die seite aus oder so keine ahnung man kann noch viel weiter schreiben aber das wäre nicht nötig ich finde es sehr wichtig immer alles zu leseen was hier steht da sind oft schreibfehler drinnen</p>',
  },
];

var sideData = {
  'icon' : 'icon',
  'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

function insertData(data, sideBlock){
  var items = "";
  for (var i = 0; i < data.length; i++) {
    contentLine = `<div class="content-section"><p>${data[i].link}</p> <a href="#">${data[i].head}</a> <p>${data[i].description}</p><br></div>`;
    items = items + contentLine;
  }
  document.getElementById('left-section-content').innerHTML = items;
  document.getElementById('right-section-left-description-block').innerHTML = sideBlock.description;
}

console.log("hello");

insertData(blockData, sideData);
