document.addEventListener("DOMContentLoaded", () => {
    const signupModal = document.getElementById('signup-modal');
    const signinModal = document.getElementById('signin-modal');
    const buttons = document.querySelectorAll('.cta-btn');
    const togglesidebar = document.querySelector('#sidebar')

    // SHOWS THE SIGN UP/IN POPOVER
    document.getElementById('signup-btn-modal').addEventListener("click", (e) => {
        e.preventDefault();
        signupModal.classList.remove('hidden');
    })

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            signupModal.classList.remove('hidden');
        });
    });

    document.getElementById('signin-btn-modal').addEventListener("click", (e) => {
        e.preventDefault();
        signinModal.classList.remove('hidden');
    })


    // EXITS WHEN THE OUTSIDE MODAL IS CLICKED
    signupModal.addEventListener("click", (e) => {
        if(e.target === signupModal) {
            signupModal.classList.add('hidden');
        }
    })

    signinModal.addEventListener("click", (e) => {
        if(e.target === signinModal) {
            signinModal.classList.add('hidden');
        }
    })


    // GO TO DASHBOARD AFTER SING UP/IN (NO CREDENTIAL CHECKS AS OF NOW)
    document.getElementById('signin-btn').addEventListener("click", (event) => {
        location.replace("dashboard.html");
    })

    document.getElementById('signup-btn').addEventListener("click", (event) => {
        location.replace("dashboard.html");
    })
})