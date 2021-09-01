document.getElementById("inputname").addEventListener("keypress", addName)
//add name and personalized greeting
function addName (e) {
if (e.key === 'Enter'){
    let greeting = document.querySelector(".greeting")
    let name = document.getElementById("inputname").value
    const motivations = ["Live consciously,","Today is the day,","Eat healthy,","I believe in you,","Wear your mask,","Be happy,",];
    const motivation = motivations[Math.floor(Math.random() * motivations.length)];
    let newGreeting = (`${motivation} ${name}!`)
    greeting.style.fontSize = "7vh"
    greeting.textContent = newGreeting
    greeting.style.textTransform = "capitalize"

    if (inputname.style.display !== "none") {
        inputname.style.display = "none";
        } else {
        inputname.style.display = "block";
        }
}
};
           

        