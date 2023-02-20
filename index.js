const logo = document.querySelector("img");

let options = {}

let observer = new IntersectionObserver((entries, observe) => {
    console.log(entries);
    console.log(observe);
    const entry = entries[0];
    setTimeout(() => {
        if (entry.isIntersecting) return logo.classList.add("active");
        return logo.classList.remove("active");
    }, 50);

}, options);

observer.observe(logo);