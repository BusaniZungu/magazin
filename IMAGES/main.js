document.addEventListener('DOMContentLoaded', function() {
    const dividers = document.querySelectorAll('.divider');
    const sections = document.querySelectorAll('.section');
    dividers.forEach((divider, idx) => {
        divider.addEventListener('click', function() {
            if (sections[idx + 1]) {
                sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
