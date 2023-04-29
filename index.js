// html img element
const logo = document.querySelector("img");

let options = {}

// observer obj
let observer = new IntersectionObserver((entries, /*observe*/) => {
    const [entry] = entries;
    if (entry.isIntersecting && !logo.classList.contains('active')) {
        setTimeout(() => logo.classList.add("active"), 50);
    } else if (!entry.isIntersecting && logo.classList.contains('active')) {
        setTimeout(() => logo.classList.remove("active");, 50);
    }
}, options);

observer.observe(logo);
