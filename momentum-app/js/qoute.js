// show custom qoute on dblclick
const custom = document.querySelector('#custom-qoute')
const qoute = document.querySelector('#quote')



function hideShowCustom() {
    if (custom.style.display !== "none") {
        custom.style.display = "none";
      } else {
        custom.style.display = "block";
      }
}
qoute.addEventListener('dblclick', hideShowCustom)

//show random qoute on click

function todaysQoute (){

  const qoutes = [
  {qoutation : "Change the world by being yourself. ", author : "-Amy Poehler"},
  {qoutation : "Every moment is a fresh beginning. ", author : "-T.S Eliot"},
  {qoutation : "Everything you can imagine is real. ", author : "– Pablo Picasso"},
  {qoutation : "Whatever you do, do it well. ", author : "– Walt Disney"},
  {qoutation : "What we think, we become. ", author : "– Buddha"},
 
  ];
  const chosenQoute = qoutes[Math.floor(Math.random() * qoutes.length)];
  qoute.textContent = ` ${chosenQoute.qoutation}  ${chosenQoute.author}`
}

qoute.addEventListener('click', todaysQoute)

//customized qoute

    function newQoute (e) {
    if (e.key === 'Enter'){
        let myName = document.getElementById("inputname").value
        let customizedQoute = custom.value + ".  ~" + myName
        
        qoute.innerHTML = customizedQoute
        qoute.style.transition= "ease-out 1s"
        qoute.style.fontSize= "2vh"
        qoute.style.textTransform= "Capitalize"
        custom.value = "";

        if (custom.style.display !== "none") {
            custom.style.display = "none";
            } else {
            custom.style.display = "block";
            }

    }
};
document.getElementById("custom-qoute").addEventListener("keypress", newQoute)