document.addEventListener("DOMContentLoaded", () => {
    // SIDEBAR TOGGLE FUNCTIONALITY
    document.getElementById('toggle-btn').addEventListener("click", () => {
        const sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('hidden');
        document.body.classList.toggle('grid-cols-[300px_1fr]');
        document.body.classList.toggle('grid-cols-[1fr]');
    })

    //
    
})