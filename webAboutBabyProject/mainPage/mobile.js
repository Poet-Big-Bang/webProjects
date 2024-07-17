function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "grid") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "grid";
    }
}