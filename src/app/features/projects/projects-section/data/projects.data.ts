import { Project } from "../../interfaces/project";

export const PROJECTS: Project[] = [
  {
    title: 'Join',
    languages: 'Angular | Supabase | SCSS',
    description:
      'Task management app inspired by Kanban.',

    image: './img/Screenshot 2026-05-27 132352.png',
    backgroundColor: '#b9c814 ',
    accentIcon: './icons/star_pink_mid.svg',
    emoji: './icons/checkbox.svg',
    roleDescription: 'Projekt 1',

    github: 'https://github.com/NadineJuliana/Join-Project.git',
    liveTest: 'https://join-2-1224.developerakademie.net/angular-projects/join/login'
  },

  {
    title: 'El Pollo Loco',
    languages: 'JavaScript | HTML | CSS',
    description:
      '2D Jump and Run Game.',

    image: './img/Screenshot 2026-05-27 132503.png',
    backgroundColor: '#ea8eb8',
    accentIcon: './icons/star_green_mid.svg',
    emoji: './icons/chicken.svg',
    roleDescription: 'Projekt 2',

    github: 'https://github.com/NadineJuliana/-El-Pollo-Loco-.git',
    liveTest: 'https://nadine-bauer.developerakademie.net/el-pollo-loco/index.html'
  },

  {
    title: 'Pokedex',
    languages: 'JavaScript | HTML | CSS | API',
    description:
      'Pokedex',

    image: './img/Screenshot 2026-05-27 132434.png',
    backgroundColor: '#213830',
    accentIcon: './icons/star_pink_mid.svg',
    emoji: './icons/speakbubble.svg',
    roleDescription: 'Projekt 3',

    github: 'https://github.com/NadineJuliana/Pokedex.git',
    liveTest: 'https://nadine-bauer.developerakademie.net/pokedex/index.html'
  }
];
