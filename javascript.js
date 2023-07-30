document.addEventListener("DOMContentLoaded", function () {
    let gridSize=58
    const gridSizeSlider = document.querySelector("#gridSizeSlider")
    const gridSizeValue = document.querySelector("#gridSizeValue")
    const container = document.querySelector("#container")
    gridSizeValue.textContent= (`${gridSize} x ${gridSize}`)
    function creatGrid(size) {
        container.style.setProperty("--grid-size", size);

    container.innerHTML = ""
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.className = "items"
        container.appendChild(div)
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = changeColor()

            

        })
    }
    }

    gridSizeSlider.addEventListener("input", function(){
        gridSize = gridSizeSlider.value
        gridSizeValue.textContent = (`${gridSize} x ${gridSize}`)
        creatGrid(gridSize)
    })



    creatGrid(gridSize)
});

function changeColor() {
    const colorPicker = document.querySelector("#colorPicker");
    return colorPicker.value;
}


