function toggleCard(menuId) {
    var menuList = document.getElementById(menuId);

    if (menuList.style.maxHeight) {
        menuList.style.maxHeight = null;
    } else {
        menuList.style.maxHeight = menuList.scrollHeight + 'px';
    }
}

function toggleDescription(descriptionId, event) {
    var description = document.getElementById(descriptionId);

    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }

    // Stop event propagation to avoid triggering toggleCard
    event.stopPropagation();
}