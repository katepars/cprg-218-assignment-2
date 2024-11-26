

function showMenu(menuId) {
    // Hide all menu items
    const menus = document.querySelectorAll('.menu-item');
    menus.forEach(menu => menu.style.display = 'none');
  
    // Show the selected menu
    document.getElementById(menuId).style.display = 'block';
  }
