function slideStandard(direction) {
    const wrapper = document.getElementById("standardWrapper");
    wrapper.scrollBy({
        left: direction * 420,
        behavior: "smooth"
    });
}