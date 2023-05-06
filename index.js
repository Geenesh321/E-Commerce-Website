// Another Page
// Get the search icon element
const searchIcon = document.querySelector('.bx-search-alt-2');

// Add a click event listener to the search icon
searchIcon.addEventListener('click', () => {
  window.location.href = 'search.html';
});
// 
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product-card")
    const pname = document.getElementsByTagName("h3")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}