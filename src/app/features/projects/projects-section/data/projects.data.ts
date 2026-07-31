import { Project } from "../../interfaces/project";

export const PROJECTS: Project[] = [
  {
    translationKey: 'join',
    languages: 'Angular | Supabase | SCSS',
    description: 'Task management app inspired by Kanban.',

    image: './img/join.png',
    backgroundColor: '#b9c814 ',
    accentIcon: './icons/star_pink_mid.svg',
    emoji: './icons/checkbox.svg',

    github: 'https://github.com/NadineJuliana/Join-Project.git',
    liveTest: 'https://join.nadine-juliana.de'
  },

  {
    translationKey: 'elPolloLoco',
    languages: 'JavaScript | HTML | CSS',
    description: '2D Jump and Run Game.',

    image: './img/elpolloloco.png',
    backgroundColor: '#ea8eb8',
    accentIcon: './icons/star_green_mid.svg',
    emoji: './icons/chicken.svg',

    github: 'https://github.com/NadineJuliana/-El-Pollo-Loco-.git',
    liveTest: 'https://el-pollo-loco.nadine-juliana.de'
  },

  {
    translationKey: 'pokedex',
    languages: 'JavaScript | HTML | CSS | API',
    description: 'Pokedex',

    image: './img/pokedex.png',
    backgroundColor: '#213830',
    accentIcon: './icons/star_pink_mid.svg',
    emoji: './icons/speakbubble.svg',

    github: 'https://github.com/NadineJuliana/Pokedex.git',
    liveTest: 'https://pokedex.nadine-juliana.de'
  },

  {
    translationKey: 'coderr',
    languages: 'Python | Django REST Framework | JavaScript | Google Cloud',
    description: 'Freelancer marketplace with a REST API backend.',

    image: './img/coderr.png',
    backgroundColor: '#b9c814 ',
    accentIcon: './icons/star_pink_mid.svg',
    emoji: './icons/checkbox.svg',

    github: 'https://github.com/NadineJuliana/Coderr.git',
    liveTest: 'https://coderr.nadine-juliana.de'
  },
];
