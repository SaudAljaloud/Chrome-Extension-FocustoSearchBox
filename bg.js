const initCommonGoogleSearchNavigation = () => {
  let searchInput = document.getElementById('lst-ib');
  key.sequence("escape escape", (event) => {
  var input = document.body.querySelectorAll("input[type=text]")[0];
  if (input){
    input.focus();
    input.select();
  }
  handleEvent(event);
  });
};

const handleEvent = (event) => {
  if (event !== null) {
    event.stopPropagation();
    event.preventDefault();
  }
};

initCommonGoogleSearchNavigation();