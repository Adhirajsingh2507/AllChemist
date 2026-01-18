document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .reveal-left, .reveal-right, .reveal-up');
    animatedElements.forEach(el => observer.observe(el));


    // --- Hero Canvas Animation ---
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    
    // Resize canvas
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Asset Configuration
    const frameCount = 192;
    const framePath = 'assets/frames/ezgif-frame-';
    const frameExt = '.jpg';
    const images = [];
    let imagesLoaded = 0;

    // Helper to pad numbers
    const pad = (num, size) => {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    };

    // Load Images
    // We start loading, and once enough are loaded, we start animation
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${framePath}${pad(i, 3)}${frameExt}`;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === frameCount) {
                startAnimation();
            }
        };
        images.push(img);
    }

    // Animation Loop
    let currentFrame = 0;
    
    // Fallback if loading takes too long: start anyway after 2 seconds? 
    // Or just simple cycle.
    
    const render = () => {
        if (images[currentFrame]) {
            // Draw image to cover canvas (object-fit: cover equivalent)
            const img = images[currentFrame];
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 
                0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
        }
    };

    const startAnimation = () => {
        // Run animation
        // Let's do a smooth playback. 30fps?
        // Or bind to scroll?
        // Prompt said "subtle animated chemistry visuals". 
        // Constant slow motion is "subtle". 
        // Scroll bound is "interactive".
        // Let's do subtle slow playback.
        
        setInterval(() => {
            currentFrame = (currentFrame + 1) % frameCount;
            requestAnimationFrame(render);
        }, 50); // ~20fps
    };

    // If loading fails or is slow, at least show something?
    // The CSS background color covers it for now.
    
});
