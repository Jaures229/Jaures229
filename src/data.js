// --- DATA : Modifie tes infos ici ---
const SKILLS = [
    "C++", "C#", "Unreal Engine 5", "Unity", "Git / Perforce", "Maths 3D", "AI Behavior Trees", "OpenGL"
  ];
  
  const PROJECTS = [
    {
      id: 1,
      title: "CYBER TACTICS",
      date: "JAN 2023 - JUIN 2024",
      context: "STUDIO X",
      type: "pro", // ou 'perso'
      stack: "Unreal Engine 5 • C++ • Steam",
      description: [
        "Architecture du système de capacités (Ability System).",
        "Optimisation du Netcode pour des parties à 10 joueurs.",
        "Débugging et profiling CPU/GPU."
      ],
      links: [
        { label: "VOIR SUR STEAM", url: "#" },
        { label: "VIDEO GAMEPLAY", url: "#" }
      ],
      imageAlt: "[ GIF GAMEPLAY ]"
    },
    {
      id: 2,
      title: "NEON DUNGEON",
      date: "OCT 2024",
      context: "GAME JAM",
      type: "perso",
      stack: "Unity • C# • 48H",
      description: [
        "Génération procédurale de donjons (Algorithme Drunkard's Walk).",
        "IA des ennemis basée sur une Machine à États finis.",
      ],
      links: [
        { label: "JOUER SUR ITCH.IO", url: "#", isItch: true },
        { label: "GITHUB", url: "#" }
      ],
      imageAlt: "[ GIF PROTO ]"
    }
  ];