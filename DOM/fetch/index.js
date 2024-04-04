
async function fetchData () {
    try {
        const response = await fetch(`https://ringsdb.com/api/public/cards/`)
        const data = await response.json()
        const card = data[0]

        const img = card.imagesrc
        const imgCard = document.querySelector(".img")
        imgCard.setAttribute("src", img)

        const name = card.name
        const nameTitle = document.querySelector(".name")
        nameTitle.innerText = name
        
    } catch (error) {
        console.error(error);
    }
}

fetchData()