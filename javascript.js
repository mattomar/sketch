document.addEventListener("DOMContentLoaded", function () {
    let gridSize=16
    const container = document.querySelector("#container")
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div')
        div.className = "items"
        container.appendChild(div)
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "blue"

            

        })
    }


});

