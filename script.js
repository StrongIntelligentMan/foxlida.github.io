document.addEventListener('mousemove', (event) => {
    anime({
        targets: '#box',
        left: event.clientX - 25, // Centering the box
        top: event.clientY - 25,
        duration: 300,
        easing: 'easeOutQuad'
    });
});