document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            faqItems.forEach(function(innerItem) {
                if (innerItem !== item && innerItem.classList.contains('active')) {
                    innerItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
});