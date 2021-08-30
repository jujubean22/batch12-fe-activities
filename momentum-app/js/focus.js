document.getElementById("focus").addEventListener("keypress", addFocus)
    function addFocus (e) {
    if (e.key === 'Enter'){
        let focusInput = document.getElementById("focus")
        let focustext = document.querySelector(".focustext")
        let focus = focusInput.value
        
        let newFocus = (`Go,  ${focus} you got this!`)
        focustext.style.fontSize = "5vh"
        focustext.textContent = newFocus
        focustext.style.transition= "ease-out 1s"
        
        if (focusInput.style.display !== "none") {
            focusInput.style.display = "none";
            } else {
            focusInput.style.display = "block";
            }

    }
};