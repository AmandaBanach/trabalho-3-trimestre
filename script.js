// Função para rolar suavemente até a seção desejada
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: "smooth"
        });
    }
}

// Animação leve nos cards ao aparecerem na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
