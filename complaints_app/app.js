const buttons = document.querySelectorAll("button")
const complaints = document.querySelector("#complaints")
let limit = 10

buttons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        let borough = currentButton.value
        let userValueLimit = document.querySelector("#complaints-search").value

        if (userValueLimit) {
            limit = userValueLimit
        }

        let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&$offset=5&borough=${borough}&agency=NYPD`
        fetch(url)
            .then((resolution) => resolution.json())
            .then((data) => {
                complaints.innerHTML = `<ul>` + data.map((complaint, index) => {
                    return `<li>${complaint.complaint_type}</li> <button  onclick = "buttonDescription ('description${index}')" type = "button" class = "police"> WHAT DID THE POLICE DO?</button> <div class = "descriptions" id = "description${index}"> ${complaint.resolution_description}</div>`
                }).join(``) + `</ul>`

            })
            .catch((error) => {
                console.log(error)
            })
    })
})

function buttonDescription(tagId) {
    let id = document.querySelector("#" + tagId)
    id.style.display = "none"
    if (id.style.display == "none") {
        id.style.display = 'block'

    }
    else {
        id.style.display = 'none'
    }
}

