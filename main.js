function toggleMenu() {
  const menu = document.getElementById("menu-expansivo")
  if (menu.className === "open"){
    menu.className = ""
  }
  else {
    menu.className = "open"
  }

}