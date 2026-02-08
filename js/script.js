$(document).ready(function () {

    // ── Matrix Rain Background ────────────────────────────────
    (function () {
        var canvas = document.getElementById('matrix-bg');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        var chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/{}[]=$#@!%^&*';
        chars = chars.split('');

        var fontSize = 14;
        var columns = Math.floor(canvas.width / fontSize);
        var drops = [];
        for (var x = 0; x < columns; x++) {
            drops[x] = Math.random() * -100;
        }

        function draw() {
            ctx.fillStyle = 'rgba(17, 25, 39, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + 'px Fira Code, monospace';

            for (var col = 0; col < drops.length; col++) {
                var char = chars[Math.floor(Math.random() * chars.length)];
                var xPos = col * fontSize;
                var yPos = drops[col] * fontSize;

                ctx.fillStyle = 'rgba(159, 239, 0, 0.35)';
                ctx.fillText(char, xPos, yPos);

                var trailChar = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillStyle = 'rgba(159, 239, 0, 0.1)';
                ctx.fillText(trailChar, xPos, yPos - fontSize);

                if (yPos > canvas.height && Math.random() > 0.985) {
                    drops[col] = 0;
                }
                drops[col]++;
            }
        }

        setInterval(draw, 50);
    })();

    // ── Typing Effect ──────────────────────────────────────────
    var text = 'Hacker. Pentester. Programmer. Trainer.';
    var typedEl = document.getElementById('typed-text');
    var i = 0;

    function typeChar() {
        if (i < text.length) {
            typedEl.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 60);
        }
    }

    typeChar();

    // ── Scroll Reveal (IntersectionObserver) ───────────────────
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        reveals.forEach(function (el) {
            el.classList.add('active');
        });
    }

    // ── Owl Carousel ───────────────────────────────────────────
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:    { items: 1 },
            576:  { items: 2 },
            768:  { items: 3 },
            992:  { items: 4 }
        }
    });

});
