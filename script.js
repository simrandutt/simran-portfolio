const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        tabContent.forEach(c => c.classList.remove('active'));

        // Add 'active' class to the clicked tab and its corresponding content
        tab.classList.add('active');
        const targetId = tab.dataset.target;
        document.getElementById(targetId).classList.add('active');
    });
});
