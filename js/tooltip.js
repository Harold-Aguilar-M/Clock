const d = document;

export default function tooltip(element) {
    
    const $tooltip = d.createElement("span");
    const $btns = d.querySelectorAll(".btn-circle");

    d.addEventListener('mouseover', (e) => {

        if (e.target.matches(element)) {
            $tooltip.textContent = e.target.dataset.tooltip ;
            $tooltip.classList.add("text-tooltip");
            e.target.appendChild($tooltip);
        }

    });
    
    d.addEventListener('mouseout', (e) => {
        if(e.target.matches(element)){
            e.target.removeChild($tooltip)
        }
    })

}