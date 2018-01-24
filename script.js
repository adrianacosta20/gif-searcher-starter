// READ the giphy API docs: https://developecrs.giphy.com/
// Variable Definition
var giphy_startpoint = 'http://api.giphy.com/v1/gifs/search'
var giphy_api_key = "dKMQ5ew6ZUbwUmljmIXmAK8RtSR6rh1k"

var searchForm = document.querySelector("#search-form")
var searchInput = document.querySelector("#search-form input")
var results = document.querySelector(".results")


// Function Definition
function displayGifs(data) {
    data.forEach(function (gifs) {
        results.innerHTML += `
    <img class="image" src="${gifs.images.preview_gif.url}">
    `
    })
}

function getGifs(term) {
    $.ajax({
        type: "GET",
        url: `${giphy_startpoint}?api_key=${giphy_api_key}&q=${term}`,
        dataType: "json",
        success: function (data) {
            console.log(data.data)
            displayGifs(data.data)
        },
        error: function (error) {
            console.log("There was an error")
        }
    })

}



// Call of Function/ Event listeers
searchForm.addEventListener("submit", function (event) {
    event.preventDefault()

    if (searchInput.value == "") return

    getGifs(searchInput.value)
})
