var wrd_plur = document.getElementById('wrd-plur');
var nbr = document.getElementById('number');
var text_area = document.getElementById('text-area');
var text_area_str = [];
var text_area_str_filt = [];
const main = () => {

  const splitString = () => {
    text_area_str = text_area.value.split(" ");
  }
  
  splitString();
  setTimeout(main, 33);
}
main();
