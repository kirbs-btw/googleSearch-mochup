var data = [
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

function insertData(data){
  var items = "";
  for (var i = 0; i < data.length; i++) {
    contentLine = `<div class="content-section"><p>${data[i].link}</p> <a href="#">${data[i].head}</a> <p>${data[i].description}</p><br></div>`;
    items = items + contentLine;
  }
  document.getElementById('left-section-content').innerHTML = items;
}

console.log("hello");

insertData(data);
