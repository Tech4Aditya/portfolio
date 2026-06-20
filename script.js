/* * WATCH DOGS / CTOS THEME JS
 * ADITYA PANDEY PORTFOLIO
 */

document.addEventListener('DOMContentLoaded', () => {
    runBootSequence();
    setupNavigation();
    fetchGitHubRepos(); // Trigger the API fetch on load
});

// 1. BOOT SEQUENCE TERMINAL SIMULATION
const runBootSequence = () => {
    const bootLog = document.getElementById('boot-log');
    const progressBar = document.getElementById('progress-bar');
    const bootScreen = document.getElementById('boot-screen');
    const mainContent = document.getElementById('main-content');
    
    const logs = [
        "> INITIALIZING ctOS KERNEL v0.98.2...",
        "> MOUNTING /SYS/DATABASES... OK",
        "> ESTABLISHING SECURE CONNECTION...",
        "> BYPASSING SECURITY PROTOCOLS... [SUCCESS]",
        "> IP SPOOFED: 103.22.98.107 (PROXY: NOIDA)",
        "> FIREWALL STATUS: OFFLINE",
        "> DECRYPTING PROFILE: USER_ID Tech4Aditya...",
        "> FETCHING OPEN SOURCE CONTRIBUTIONS...",
        "> SYNCING GITHUB & CODOLIO TELEMETRY [||||||||||] 100%",
        "> RETRIEVING PROJECTS & IMAGE FILES...",
        "> SYSTEMS_READY."
    ];

    let currentLogIndex = 0;
    
    // Simulate terminal typing
    const typeNextLog = () => {
        if (currentLogIndex < logs.length) {
            bootLog.innerHTML += logs[currentLogIndex] + '\n';
            currentLogIndex++;
            
            // Update progress bar
            const percent = (currentLogIndex / logs.length) * 100;
            progressBar.style.width = percent + '%';
            
            // Speed up typing for UX
            setTimeout(typeNextLog, Math.random() * 150 + 50);
        } else {
            finalizeBoot();
        }
    };

    const finalizeBoot = () => {
        const status = document.getElementById('boot-status');
        status.innerText = "ACCESS GRANTED. LOGGING IN...";
        status.style.color = "#2ecc71"; // Terminal Green
        progressBar.style.backgroundColor = "#2ecc71";
        bootLog.style.color = "#2ecc71";

        // Transition to main site
        setTimeout(() => {
            bootScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            // Fade in effect via CSS
            requestAnimationFrame(() => {
                mainContent.classList.add('logged-in');
            });
        }, 800);
    };

    // Start boot sequence after a slight pause
    setTimeout(typeNextLog, 400);
};

// 2. NAVIGATIONAL LOGIC FOR TERMINAL SECTIONS
const setupNavigation = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main > section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Manage Active Link State
            navLinks.forEach(l => {
                l.classList.remove('active-link');
                l.style.color = '';
            });
            link.classList.add('active-link');

            const targetSection = document.getElementById(targetId);
            if (!targetSection) return;

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden-section');
                section.classList.remove('active-section');
            });

            // Show targeted section
            targetSection.classList.remove('hidden-section');
            // Small delay to trigger the CSS animation
            requestAnimationFrame(() => {
                targetSection.classList.add('active-section');
            });
            
            // Scroll to top of the main container
            document.getElementById('main-content').scrollTo({top: 0, behavior: 'smooth'});
        });
    });
};

// 3. GITHUB API EXTRACTION PROTOCOL
async function fetchGitHubRepos() {
    const container = document.getElementById('github-repos');
    if (!container) return;

    try {
        // Increased per_page to 100 to ensure we catch all of them
        const response = await fetch('https://api.github.com/users/Tech4Aditya/repos?sort=updated&per_page=100');
        
        if (!response.ok) throw new Error('API connection intercepted.');
        
        const repos = await response.json();
        
        // Clear the "Initiating connection..." loading text
        container.innerHTML = '';
        
        repos.forEach(repo => {
            // Removed the fork filter so EVERYTHING shows up
            
            // Add a visual tag if the repo is a fork
            const forkTag = repo.fork ? `<span style="font-size: 0.75rem; color: var(--dedsec-magenta); margin-left: 10px;">[FORK]</span>` : '';

            const repoHTML = `
                <a href="${repo.html_url}" target="_blank" class="api-repo-card">
                    <div>
                        <h4 class="repo-name">${repo.name} ${forkTag}</h4>
                        <p class="repo-desc">${repo.description || '[DATA ENCRYPTED: No description provided]'}</p>
                    </div>
                    <div class="repo-stats">
                        <span>[LANG: ${repo.language || 'SYS_UNKNOWN'}]</span>
                        <span>[★ ${repo.stargazers_count}]</span>
                    </div>
                </a>
            `;
            container.innerHTML += repoHTML;
        });

    } catch (error) {
        container.innerHTML = `
            <p style="color: var(--dedsec-magenta); font-family: var(--font-vibe); font-size: 1.2rem;">
                > ERROR: CONNECTION INTERCEPTED BY GITHUB SECURITY PROTOCOLS.<br>
                > API LIMIT REACHED OR NETWORK OFFLINE.
            </p>`;
    }
}