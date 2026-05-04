document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const isOpen = accordionItem.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isOpen) {
            accordionItem.classList.add('active');
        }
    });
});

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("overlay").classList.add("active");
    document.documentElement.style.overflow = "hidden"; // Locks HTML
    document.body.style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").classList.remove("active");
    document.documentElement.style.overflow = ""; 
    document.body.style.overflow = "";
}