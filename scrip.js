document.addEventListener("mousemove", (e) => {
    console.log(e);
    
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});


document.addEventListener("touchmove", (e) => {
    let t = e.touches[0];
    document.documentElement.style.setProperty("--x", t.clientX + "px");
    document.documentElement.style.setProperty("--y", t.clientY + "px");
});
