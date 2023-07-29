document.addEventListener("DOMContentLoaded", function () {
    let gridSize=16
    const container = document.querySelector("#container")
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div')
        div.className = "items"
        container.appendChild(div)
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = changeColor()

            

        })
    }


});


function changeColor() {
    const colorPicker = document.querySelector("#colorPicker");
    const box = document.querySelector("#box")
    box.style.backgroundColor = colorPicker.value
    return colorPicker.value;
}