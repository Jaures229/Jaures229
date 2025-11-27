import React, { useState, useEffect } from 'react';
import './App.css';

// Dictionnaire des icônes (Chemins à adapter selon tes fichiers)
const TECH_ICONS = {
  Unity: "assets/icons/unity.svg",
  CSharp: "assets/icons/csharp.svg",
  CPP: "assets/icons/cpp.svg",
  Android: "assets/icons/android.svg", // ou mobile
  Git: "assets/icons/git.svg",
  VSCode: "assets/icons/vscode.svg",
  SFML: "assets/icons/sfml.png",
  Netcode: "assets/icons/multiplayer.svg", // icône générique réseau
  Linux: "assets/icons/linux.svg"
};

const PROJECTS = [
  {
    id: 1,
    title: "AstroWorld",
    date: "Juin - Sep 2025",
    context: "Masseka Game Studio",
    type: "pro",
    stack: "Unity • C# • Mobile • 3D",
    // NOUVEAU : Liste précise pour l'affichage visuel
    technologies: ["Unity", "CSharp", "Android", "Git", "VSCode"], 
    description: [
      "Un jeu mobile centré sur l'espace qui propulse le joueur au cœur de l'astronomie.",
      "L'objectif est de débloquer et d'assimiler des faits concrets sur l'espace et les planètes via des énigmes de gameplay immersives."
    ],
    links: [],
    mediaSrc: "19r1Wgs_hfI",
    mediaType: "youtube",
    imageAlt: "[AstroWorld Gameplay]"
  },
  {
    id: 2,
    title: "Zemidjan Road Rage",
    date: "Juin 2025",
    context: "Masseka Game Studio",
    type: "pro",
    stack: "Unity • C# • Mobile • Playstore",
    technologies: ["Unity", "CSharp", "Android", "Git"],
    description: [
      "Prototype mobile basé sur les zemidjans.",
      "Jeu 2D démontrant la physique de véhicule."
    ],
    links: [
      { label: "PLAYSTORE", url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.ZemidjanRoadRage&pli=1", isItch: true},
    ],
    mediaSrc: "DQIltyTADHw",
    mediaType: "youtube",
    imageAlt: "[Zemidjan Gameplay]"
  },
  // ... Pour tes autres projets, ajoute la ligne 'technologies' ...
  {
    id: 5,
    title: "Pong-Lan",
    date: "Nov 2025",
    context: "Projet perso",
    type: "perso",
    stack: "Unity • Netcode • Mobile",
    technologies: ["Unity", "CSharp", "Netcode", "Android"],
    description: [
      "Jeu multijoueur local sur mobile.",
    ],
    links: [
      { label: "GITHUB", url: "https://github.com/JOKS-Studio/Pong-Lan" },
      { label: "APK", url: "https://github.com/JOKS-Studio/Pong-Lan" }
    ],
    mediaSrc: "/assets/img/pong.jpg",
    mediaType: "image",
    imageAlt: "Pong-Lan Screen"
  },
  {
    id: 6,
    title: "R-TYPE",
    date: "Déc 2024",
    context: "Projet Ecole",
    type: "perso",
    stack: "C++ • SFML • TCP/UDP",
    technologies: ["CPP", "SFML", "Linux", "Netcode", "Git"],
    description: [
      "Jeu de tir spatial multijoueur (Moteur Custom).",
      "Architecture ECS et Gestion Réseau UDP."
    ],
    links: [
      { label: "GITHUB", url: "https://github.com/Jaures229/R-Type" }
    ],
    imageAlt: "[R-Type Screen]"
  }
];


const ARSENAL = {
  "MOTEURS": [
    // Le chemin est relatif à la racine du dossier public
    { name: "Unity", icon: "assets/icons/unity.svg", type: "engine" }
  ],
  "LANGAGES": [
    { name: "C", icon: "assets/icons/c_language.png", type: "language" },
    { name: "C++", icon: "assets/icons/cpp.svg", type: "language" },
    { name: "C#", icon: "assets/icons/csharp.svg", type: "language" },
    { name: "Lua", icon: "assets/icons/lua.svg", type: "language" },
    { name: "JavaScript", icon: "assets/icons/javascript.svg", type: "language" }
  ],
  "OUTILS & CONCEPTS": [
    { name: "Git", icon: "assets/icons/git.svg", type: "tool" },
    { name: "Vscode", icon: "assets/icons/vscode.svg", type: "tool" },
    { name: "Bash", icon: "assets/icons/bash.svg", type: "tool" },
    { name: "Linux", icon: "assets/icons/linux.svg", type: "concept" },
    { name: "Problem Solving", icon: "assets/icons/problem-solving.svg", type: "concept" },
    // { name: "AI Behavior Trees", icon: null, type: "concept" },
    // { name: "OpenGL", icon: null, type: "tool" }
  ],
  "LIBRAIRIE": [
    { name: "SFML/CSFML", icon: "assets//icons/sfml.png", type: "tool" },
    // { name: "Maths 3D", icon: null, type: "concept" },
    // { name: "AI Behavior Trees", icon: null, type: "concept" },
    // { name: "OpenGL", icon: null, type: "tool" }
  ]
};

// --- COMPONENTS ---

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky-nav ${visible ? 'visible' : ''}`}>
      <a href="#hero" className="nav-logo">Jaures AGOSSOU</a>
      <ul className="nav-menu">
        <li><a href="#hero">00. START</a></li>
        <li><a href="#projects">01. MISSIONS</a></li>
        <li><a href="/assets/cv/CV.pdf" target="_blank">02. DATA (CV)</a></li>
        <li><a href="#contact">03. COMMS</a></li>
      </ul>
    </nav>
  );
};

const BackgroundEffects = () => (
  <>
    <div className="bg-grid"></div>
    <div className="background-fx">
      <div className="floating-icon icon-1" style={{top: '10%', left: '5%', animationDelay: '0s', fontSize: '3rem'}}>🎮</div>
      <div className="floating-icon icon-2" style={{top: '20%', right: '10%', animationDelay: '2s', fontSize: '5rem'}}>{`{ }`}</div>
      <div className="floating-icon icon-3" style={{bottom: '15%', left: '10%', animationDelay: '4s', fontSize: '4rem'}}>👾</div>
      <div className="floating-icon icon-4" style={{bottom: '30%', right: '5%', animationDelay: '1s', fontSize: '2rem'}}>⚔️</div>
      <div className="floating-icon icon-5" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.02, fontSize: '15rem'}}>&lt;/&gt;</div>
    </div>
  </>
);

// const Hero = () => (
//   <header id="hero" className="hero">
//     <h1>[Jaurès AGOSSOU]</h1>
//     <div className="subtitle">GAMEPLAY PROGRAMMER</div>
//     <p>
//       Expert en informatique hautement motivé, animé par une passion pour le développement de jeux vidéo.
//       Aspire à approfondir ses compétences et à se spécialiser davantage dans ce domaine.
//       Engagé dans une démarche d'apprentissage continu et d'excellence.
//     </p>
//     <a 
//       href="assets/cv/CV.pdf" // 👈 Mise à jour du chemin
//       className="btn-cv" 
//       target="_blank" 
//       rel="noopener noreferrer"
//       download="[AGOSSOU_JAURES]_CV.pdf" // 👈 Ajout de l'attribut 'download'
//     >
//       TÉLÉCHARGER MON CV (PDF)
//     </a>
//   </header>
// );

const Skills = () => (
  <section>
    <div className="section-title"><span>01.</span> ARSENAL TECHNIQUE</div>
    <div className="arsenal-container">
      {Object.keys(ARSENAL).map((categoryName) => (
        <div key={categoryName} className="skill-category">
          <h3>* {categoryName}</h3>
          <div className="skills-container">
            {ARSENAL[categoryName].map((skill, index) => (
              <div key={index} className={`skill-badge skill-${skill.type}`}>
                {/* 🚨 VÉRIFICATION CLÉ : 
                  Si 'skill.icon' contient un chemin (ex: '/icons/unreal.svg'),
                  on affiche une balise <img>.
                */}
                {skill.icon ? (
                  <img src={skill.icon} alt={`${skill.name} logo`} className="skill-logo" />
                ) : (
                  // Si 'skill.icon' est null, on affiche un texte ou un placeholder
                  <span className="skill-icon-placeholder">//</span> 
                )}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project }) => {
  // Fonction pour rendre le contenu multimédia (GIF ou YouTube)

  const renderMedia = () => {
    if (project.mediaType === "youtube" && project.mediaSrc) {
      const embedUrl = `https://www.youtube.com/embed/${project.mediaSrc}?rel=0&autoplay=0`;
      return (
        // 🔑 Nouvelle div qui gère le ratio 16:9
        <div className="video-ratio-box">
          <iframe
            src={embedUrl}
            title={project.imageAlt}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="project-iframe"
          ></iframe>
        </div>
      );
    }
    
    if (project.mediaSrc) {
      // Affichage d'un GIF ou d'une image simple
      return (
        <img 
          src={project.mediaSrc} 
          alt={project.imageAlt} 
          className="project-media-img"
        />
      );
    }

    // 2. Gère l'image/GIF (quand mediaType est 'image', 'gif', ou manquant)
    if (project.mediaSrc) {
      return (
        <img 
          src={project.mediaSrc} // 👈 Utilise le chemin de l'image/GIF
          alt={project.imageAlt} 
          className="project-media-img" // 👈 Cette classe gère la taille
        />
      );
    }

    // Affichage du placeholder par défaut si aucune source média n'est fournie
    return <span>{project.imageAlt}</span>;
  };

  return (
    <div className="project-card">
      <div className="project-visual">
        {renderMedia()} 
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-date">{project.date}</span>
          <span>{project.context}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="tech-stack">{project.stack}</div>
        <div className="description">
          <ul>
            {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
          </ul>
        </div>
        <div className="link-group">
          {project.links.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              className={`link-btn ${link.isItch ? 'link-itch' : ''}`}
              target="_blank" // Ajouté pour ouvrir les liens dans un nouvel onglet
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};



const ProjectGallery = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'pro', 'perso'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filtrer les projets
  const filteredProjects = PROJECTS.filter(p => 
    filter === 'all' ? true : p.type === filter
  );

  // Reset de l'index quand on change de filtre
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const activeProject = filteredProjects[currentIndex];

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
      setIsAnimating(false);
    }, 300); // Temps de la transition
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
      setIsAnimating(false);
    }, 300);
  };

  if (!activeProject) return <div>Aucun projet trouvé.</div>;

  return (
    <section id="projects" className="gallery-section">
      <div className="section-title"><span>02.</span> MISSION SELECT</div>

      {/* 1. ONGLETS DE FILTRE (STYLE RETRO) */}
      <div className="gallery-tabs">
        {['all', 'pro', 'perso'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`tab-btn ${filter === f ? 'active' : ''}`}
          >
            {f === 'all' ? 'ALL MISSIONS' : f === 'pro' ? 'PROFESSIONAL' : 'SIDE QUESTS'}
          </button>
        ))}
      </div>

      {/* 2. ZONE PRINCIPALE DU PROJET */}
      <div className="gallery-container">
        
        {/* Bouton Précédent */}
        <button className="nav-arrow left" onClick={handlePrev}>&lt;</button>

        {/* Carte du Projet (Avec animation) */}
        <div className={`gallery-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          
          {/* Colonne Visuelle */}
          <div className="gallery-visual">
            <div className="visual-frame">
               {/* Logique d'affichage Média (Reprise de ton code précédent) */}
               {activeProject.mediaType === "youtube" ? (
                  <div className="video-ratio-box">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeProject.mediaSrc}?rel=0`}
                      title={activeProject.title}
                      className="project-iframe"
                      allowFullScreen
                    ></iframe>
                  </div>
               ) : (
                  <img src={activeProject.mediaSrc || "placeholder.jpg"} alt={activeProject.imageAlt} className="project-media-img" />
               )}
            </div>



            {/* ANCIEN : code-terminal REMPLACÉ PAR : tech-showcase */}
            <div className="tech-showcase">
              <div className="tech-header">
                <span className="tech-title"> SYSTEM LOADOUT</span>
                <div className="tech-line"></div>
              </div>
              
              <div className="tech-grid-display">
                {activeProject.technologies && activeProject.technologies.map((techKey, index) => (
                  <div key={index} className="tech-item-card">
                    {/* On affiche l'icône si elle existe dans TECH_ICONS, sinon rien */}
                    {TECH_ICONS[techKey] && (
                      <img src={TECH_ICONS[techKey]} alt={techKey} className="tech-icon-img" />
                    )}
                    <span className="tech-name">{techKey}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Infos */}
          <div className="gallery-info">
            <div className="project-meta">
              <span className="project-date">{activeProject.date}</span>
              <span className="badge-type">{activeProject.type === 'pro' ? activeProject.context : activeProject.context }</span>
            </div>
            
            <h3 className="project-title">{activeProject.title}</h3>
            <div className="tech-stack" style={{borderBottom:'1px solid #334155', paddingBottom:'10px'}}>
              {activeProject.stack}
            </div>

            <div className="description">
              <ul>
                {activeProject.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
            </div>

            <div className="link-group">
              {activeProject.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`link-btn ${link.isItch ? 'link-itch' : ''}`}>
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="gallery-counter">
              MISSION {currentIndex + 1} / {filteredProjects.length}
            </div>
          </div>
        </div>

        {/* Bouton Suivant */}
        <button className="nav-arrow right" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact">
    <div className="section-title" style={{marginTop: 100, border: 'none'}}><span>03.</span> CONTACTS</div>

    {/* NOUVEAU : Insert Coin Animation */}
    <div className="insert-coin-anim">
      INSERT COIN TO START
    </div>
  
    <p>Contactez-moi pour démarrer une nouvelle partie.</p>
      <div className="contact-icons">
        <a href="mailto:email@exemple.com">
          <img src="assets/icons/email.svg" alt="Email" className="contact-logo" /> EMAIL </a>
        <a href="https://linkedin.com/in/jaurès-agossou-4021a1264">
          <img src="assets/icons/linkedin.svg" alt="LinkedIn" className="contact-logo" /> LINKEDIN
        </a>
        <a href="https://github.com/Jaures229">
          <img src="assets/icons/github.svg" alt="GitHub" className="contact-logo" /> GITHUB
        </a>
    {/* ... autres liens */}
  </div>
      <br />
    <a href="assets/cv/CV.pdf" download="[AGOSSOU_JAURES]_CV.pdf" style={{color: 'var(--accent)', fontSize: '0.8rem'}}>[ TÉLÉCHARGER CV PDF ]</a>
    <br /><br />
    © 2025 - Portfolio
  </footer>
);

// --- NOUVEAUX COMPOSANTS DÉCORATIFS ---

// 1. Les coins du HUD (Cadre écran)
const CornerHUD = () => (
  <div className="hud-container">
    <div className="hud-corner top-left"></div>
    <div className="hud-corner top-right"></div>
    <div className="hud-corner bottom-left"></div>
    <div className="hud-corner bottom-right"></div>
    <div className="hud-scanline"></div>
  </div>
);

// 2. Indicateur de scroll animé
const ScrollIndicator = () => (
  <div className="scroll-indicator">
    <div className="mouse-icon">
      <div className="wheel"></div>
    </div>
    <div className="arrow-pixel">▼</div>
  </div>
);

// --- MISE À JOUR DU COMPOSANT HERO AVEC AVATAR ---

const Hero = () => {
  // Utilisation de l'effet machine à écrire
  const subtitle = useTypewriter("GAMEPLAY PROGRAMMER", 50);

  return (
    <header id="hero" className="hero">
      
      <div className="hero-content-wrapper">
        {/* BLOC TEXTE */}
        <div className="hero-text">
          <div className="glitch-wrapper">
            <h1 className="glitch" data-text="[Jaurès AGOSSOU]">[Jaurès AGOSSOU]</h1>
          </div>

          {/* Sous-titre animé avec curseur clignotant */}
          <div className="subtitle">
            {subtitle}<span className="cursor-blink">_</span>
          </div>
          
          <div className="rpg-stats">
            <div className="stat-item">LVL. 25</div>
            <div className="stat-item">HP <span style={{color:'#ef4444'}}>██████</span></div>
            <div className="stat-item">MP <span style={{color:'#3b82f6'}}>████░░</span></div>
          </div>

          <p>
            Expert en informatique hautement motivé, animé par une passion pour le développement de jeux vidéo.
            Aspire à approfondir ses compétences et à se spécialiser davantage dans ce domaine.
            Engagé dans une démarche d'apprentissage continu et d'excellence.
          </p>

          <a 
            href="assets/cv/CV.pdf" 
            className="btn-cv" 
            target="_blank" 
            rel="noopener noreferrer"
            download="[AGOSSOU_JAURES]_CV.pdf"
          >
            TÉLÉCHARGER MON CV (PDF)
          </a>
        </div>

        {/* NOUVEAU : BLOC AVATAR */}
        <div className="hero-avatar">
          <div className="avatar-frame">
            {/* 
                1. Pour changer la photo, remplace 'src' par : src="assets/img/maphoto.jpg" 
                2. L'URL actuelle génère un avatar pixel unique basé sur ton prénom.
            */}
            <img 
              src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Jaures" 
              alt="Avatar Pixel" 
              className="avatar-img"
            />
          </div>
          <div className="avatar-status">
            <span className="status-dot"></span> ONLINE
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </header>
  );
};

// 1. Hook pour l'effet machine à écrire
const useTypewriter = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  
  return displayedText;
};

// 2. Hook pour le Konami Code (Easter Egg)
const useKonamiCode = () => {
  const [success, setSuccess] = useState(false);
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newHistory = [...history, e.key].slice(-10);
      setHistory(newHistory);
      if (JSON.stringify(newHistory) === JSON.stringify(sequence)) {
        setSuccess(true);
        alert("CHEAT CODE ACTIVATED: GOD MODE ON 🎮");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history, sequence]);

  return success;
};




// --- MAIN APP COMPONENT ---
function App() {
  const godMode = useKonamiCode(); // Active l'effet si le code est entré

  return (
    <div className={`App ${godMode ? 'rainbow-mode' : ''}`}>
      <CornerHUD /> {/* <--- AJOUTER ICI LE HUD */}
      <Navbar />
      <BackgroundEffects />
      
      <div className="container">
        <Hero />
        <Skills />


        <ProjectGallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;




