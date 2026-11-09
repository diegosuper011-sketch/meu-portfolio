// Inicializa Ícones Lucide
lucide.createIcons();

// Toggle Menu Mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Filtros de Projetos
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Ativar botão clicado
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-brand-500', 'text-dark-base', 'font-bold');
            b.classList.add('bg-dark-card', 'text-slate-300');
        });
        btn.classList.add('active', 'bg-brand-500', 'text-dark-base', 'font-bold');
        btn.classList.remove('bg-dark-card', 'text-slate-300');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'todos' || card.getAttribute('data-category').includes(filter)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal Helpers
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// Submissão do Formulário (Simulação)
function handleFormSubmit(e) {
    e.preventDefault();
    const feedback = document.getElementById('form-feedback');
    feedback.classList.remove('hidden');
    
    // Limpa o formulário após 2 segundos
    setTimeout(() => {
        document.getElementById('contact-form').reset();
        feedback.classList.add('hidden');
    }, 4000);
}
