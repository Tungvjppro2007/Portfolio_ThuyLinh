document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. NAVIGATION & ROUTING
       ========================================================================== */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const menuToggle = document.getElementById('menuToggle');

    // Section Switching Logic
    function switchSection(targetId) {
        sections.forEach(sec => {
            sec.classList.remove('active');
        });
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update Nav Links
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Nav Link Click Handler
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            
            // Switch view
            switchSection(sectionId);
            
            // Update URL hash
            history.pushState(null, null, `#${sectionId}`);
            
            // Close mobile menu if open
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('show');
            }
        });
    });

    // Mobile Hamburger Menu
    if (menuToggle && sidebar && sidebarOverlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('show');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
        });
    }

    // Handle initial hash routing
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const sectionExists = Array.from(sections).some(sec => sec.id === hash);
        if (sectionExists) {
            switchSection(hash);
        }
    }

    /* ==========================================================================
       2. BÀI 1: STEP-BY-STEP SLIDER
       ========================================================================== */
    const stepButtons = document.querySelectorAll('.step-btn');
    const stepContents = document.querySelectorAll('.step-content-item');

    stepButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const stepNum = btn.getAttribute('data-step');
            
            // Update buttons active class
            stepButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update content active class
            stepContents.forEach(content => {
                content.classList.remove('active');
            });
            const targetContent = document.getElementById(`stepContent-${stepNum}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       3. BÀI 2: COLLAPSIBLE FILE TREE
       ========================================================================== */
    const fileTree = document.getElementById('fileTree');
    if (fileTree) {
        // Expand/Collapse folder tree node clicks
        const dirNodes = fileTree.querySelectorAll('.directory');
        dirNodes.forEach(node => {
            // Find toggle span and name span
            const toggler = node.querySelector('.toggle');
            const nodeName = node.querySelector('.node-name');
            
            const handleToggle = (e) => {
                e.stopPropagation();
                node.classList.toggle('expanded');
                if (toggler) {
                    toggler.textContent = node.classList.contains('expanded') ? '▼' : '▶';
                }
            };

            if (toggler) toggler.addEventListener('click', handleToggle);
            if (nodeName) nodeName.addEventListener('click', handleToggle);
        });
    }

    /* ==========================================================================
       4. BÀI 3: PROMPT ENGINEERING TABS
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Update tab button classes
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update tab panel classes
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       5. BÀI 4: CHALLENGE TABS
       ========================================================================== */
    const chButtons = document.querySelectorAll('.ch-btn');
    const chPanels = document.querySelectorAll('.ch-content-panel');

    chButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCh = btn.getAttribute('data-ch');
            
            // Update challenge button classes
            chButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update challenge panel classes
            chPanels.forEach(panel => {
                panel.classList.remove('active');
            });
            const targetPanel = document.getElementById(targetCh);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
