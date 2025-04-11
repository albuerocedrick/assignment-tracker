const pages = {
    dashboard: {
        title: "Dashboard",
        content: `
        <div  class="grid grid-cols-4 grid-rows-4 gap-4 h-full" > 
            <div class="bg-gray-300">number of completed task</div>
            <div class="bg-gray-300">number of pending task</div>
            <div class=" row-span-2 col-span-2 flex flex-row gap-4">
                <div class="bg-gray-300 w-1/3">who has access to your tracker</div>
                <div class="bg-gray-300 w-2/3">mini Calendar</div>
            </div>
            <div class="bg-gray-300 row-span-3 col-span-1">today's task</div>
            <div class="bg-gray-300 row-span-3 col-span-1">priority task</div>
            <div class="bg-gray-300 row-span-2">recent notification </div>
            <div class=" row-span-2 flex flex-col gap-4">
                <div class="bg-gray-300 h-1/2">date today</div>
                <div class="bg-gray-300 h-1/2">time</div>
            </div>
        </div>`
    },
    calendar: {
        title: "Calendar",
        content: `
        <div id="main-content" class="flex flex-row gap-4 h-full">
            <div class="bg-gray-300 w-2/3">
                Big calendar, and when you click on a specific date, the tasks assigned for that day appear on the right.
            </div>
            <div class="bg-gray-300 w-1/3">Here, the tasks for the selected date will appear.</div>
        </div>`
    },
    tasks: {
        title: "Tasks",
        content: `
        <div id="main-content" class="bg-gray-300 h-full">
            Here is a table with all your tasks. You can perform CRUD operations on them.
        </div>`
    },
    settings: {
        title: "Settings",
        content: `
        <div id="main-content" class="bg-gray-300 h-full">
            Here are your settings options.
        </div>`
    },
};

function ChangePage(buttonID, mainContent) {
    mainContent.innerHTML = '';
    
    switch(buttonID) {
        case 'dashboard-btn':
            mainContent.innerHTML = pages.dashboard.content;
            break;
        case 'tasks-btn':
            mainContent.innerHTML = pages.tasks.content;
            break;
        case 'calendar-btn':
            mainContent.innerHTML = pages.calendar.content;
            break;
        case 'settings-btn':
            mainContent.innerHTML = pages.settings.content;
            break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // SIDEBAR TOGGLE FUNCTIONALITY
    document.getElementById('toggle-btn').addEventListener("click", () => {
        const sidebar = document.getElementById('sidebar');

        sidebar.classList.toggle('hidden');
        document.body.classList.toggle('grid-cols-[300px_1fr]');
        document.body.classList.toggle('grid-cols-[1fr]');
    });

    // SIDEBAR BUTTONS FUNCTION
    const sidebarButtons = document.querySelectorAll('.sidebar-items');
    const mainContent = document.getElementById('main-content');

    sidebarButtons.forEach(button => {
        button.addEventListener("click", () => {
            ChangePage(button.id, mainContent);
        });
    });
});