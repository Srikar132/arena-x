export const navItems = [
  { id: 1, name: 'Tournaments', path: '/overview/tournaments' },
  { id: 2, name: 'Games', path: '/overview/games' },
  { id: 3, name: 'Teams', path: '/overview/teams' },
  { id: 4, name: 'FAQ', path: '/overview/faq' },
];

export const dummyTournaments = [
  {
    id: 't1',
    title: 'Superliga Weekly',
    subtitle: 'Torneo Individual',
    imageUrl:
      'https://res.cloudinary.com/lmn/image/upload/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/u/n/n/unnamed-12fb2.jpg',
    participants: 128,
    maxTeams: 12,
    currentTeams: 12,
    entryFee: 99.99,
    coinReward: 75,
    startDate: '2025-10-07T05:30:00',
    isPlaying: true,
    isFree: 'Free entry',
    status: 'active',
  },
  {
    id: 't2',
    title: "Champion's Cup",
    subtitle: 'Team Tournament',
    imageUrl: 'https://igfv3.s3.amazonaws.com/9c0ae6ab13a1c1e66eabdb3794d8d41e_1000.jpg',
    participants: 64,
    maxTeams: 16,
    currentTeams: 9,
    entryFee: 24.99,
    coinReward: 150,
    startDate: '2025-10-15T18:00:00',
    isPlaying: true,
    isFree: 'Free entry',
    status: 'finished',
  },
  {
    id: 't3',
    title: 'Weekend Warrior',
    subtitle: 'Solo Challenge',
    imageUrl: 'https://i.ytimg.com/vi/vRr41KzQdCw/maxresdefault.jpg',
    participants: 256,
    maxTeams: 32,
    currentTeams: 28,
    entryFee: 9.99,
    coinReward: 120,
    startDate: '2025-10-12T12:00:00',
    isPlaying: true,
    isFree: 'Free entry',
    status: 'upcoming',
  },
  {
    id: 't4',
    title: 'Pro League Finals',
    subtitle: 'Professional Tournament',
    imageUrl:
      'https://cdnb.artstation.com/p/assets/covers/images/000/682/237/large/jedd-chevrier-spark-boxart-small.jpg?1430690572',
    participants: 32,
    maxTeams: 8,
    currentTeams: 8,
    entryFee: 99.99,
    coinReward: 500,
    startDate: '2025-11-01T20:00:00',
    isPlaying: true,
    isFree: 'Free entry',
    status: 'finished',
  },
  {
    id: 't5',
    title: 'Rookie Challenge',
    subtitle: 'Beginner Friendly',
    imageUrl: 'https://th.bing.com/th/id/OIP.R7wjPVH6uyvjqUYgEEMBewHaLL?&rs=1&pid=ImgDetMain',
    participants: 50,
    maxTeams: 10,
    currentTeams: 3,
    entryFee: 99.99,
    coinReward: 25,
    startDate: '2025-10-20T16:30:00',
    isPlaying: true,
    isFree: 'Free entry',
    status: 'active',
  },
];

export const gameData = [
  {
    id: 1,
    title: 'COSMIC RUSH',
    imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-bycs.jpg?v=2',
  },
  {
    id: 2,
    title: 'APOCALYPSE',
    imageUrl: 'https://wallpapers.com/images/hd/anthem-game-1080-x-2160-4hymwofpafe012uw.jpg',
  },
  {
    id: 3,
    title: 'CYBER HUNTER',
    imageUrl: 'https://prodigits.co.uk/content4/wallpapers/2024/p2/28/f8a58043.jpg',
  },
  {
    id: 4,
    title: 'PIXEL PARADISE',
    imageUrl:
      'https://rukminim2.flixcart.com/image/850/1000/kim1aq80-0/physical-game/r/m/q/full-game-with-all-mods-single-multi-players-free-fire-digital-original-imafyd8azuxvvkyy.jpeg?q=90&crop=false',
  },
  {
    id: 5,
    title: 'QUANTUM LEAP',
    imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-bycs.jpg?v=2',
  },
  // {
  //   id: 6,
  //   title: 'NEON DYNASTY',
  //   imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-lgtgp.jpg?v=2',
  // },
];

export const playerData = [
  {
    id: '1',
    avatar: 'arena-x.png', // Placeholder for green avatar
    alt: 'Player with green background',
  },
  {
    id: '2',
    avatar: 'arena-x.png', // Placeholder for green avatar
    alt: 'Player with purple background',
  },
  {
    id: '3',
    avatar: 'arena-x.png', // Placeholder for green avatar
    alt: 'Player with yellow background',
  },
  {
    id: '4',
    avatar: 'arena-x.png', // Placeholder for green avatar
    alt: 'Player with teal background',
  },
];

export const quickLinks = [
  { name: 'Tournaments', url: '#' },
  { name: 'Games', url: '#' },
  { name: 'Teams', url: '#' },
  { name: 'FAQ', url: '#' },
];

export const exploreLinks = [
  { name: 'Top Players', url: '#', hasArrow: true },
  { name: 'Messages', url: '#' },
  { name: 'Profile', url: '#' },
];

export const followUsLinks = [
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'LinkedIn', url: '#' },
];
