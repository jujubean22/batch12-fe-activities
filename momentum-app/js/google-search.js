document.getElementById("google-search").addEventListener("click", showSearch)
function showSearch () {
    let search = document.getElementById("searchform")       
        if (search.style.display !== "none") {
            search.style.display = "none";
            } else {
            search.style.display = "block";
            }

    }