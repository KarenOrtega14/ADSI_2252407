const bt_menu = document.getElementById("#bt_menu");
const menu_principal = document.getElementById("#menu_principal")
bt_menu.addEventListener("onclick",function mostrarmenu(){
    menu_principal.classList.toggle("mostrar")
}
)