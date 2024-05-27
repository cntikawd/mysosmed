<script>
    function toggleMenu() {
        const menu = document.getElementById('menu-list');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }

    // Close the menu if the user clicks outside of it
    window.onclick = function(event) {
        const menu = document.getElementById('menu-list');
        if (!event.target.closest('.menu-icon')) {
            menu.classList.add('hidden');
        }
    }
</script>
