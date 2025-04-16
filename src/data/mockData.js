// src/data/mockData.js

// Data for the main playlist/song library
export const mockPlaylistData = [
  {
    id: 1,
    title: "The Path of the Wind",
    artist: "Joe Hisaishi",
    duration: 225,
    art: "https://placehold.co/100x100/F5F5DC/3A5F0B?text=Totoro",
    src: "",
  },
  {
    id: 2,
    title: "One Summer's Day",
    artist: "Joe Hisaishi",
    duration: 186,
    art: "https://placehold.co/100x100/ADD8E6/8B0000?text=Spirited",
    src: "",
  },
  {
    id: 3,
    title: "Merry-Go-Round of Life",
    artist: "Joe Hisaishi",
    duration: 313,
    art: "https://placehold.co/100x100/D2B48C/663300?text=Howl",
    src: "",
  },
  {
    id: 4,
    title: "Carrying You",
    artist: "Azumi Inoue",
    duration: 252,
    art: "https://placehold.co/100x100/B0E0E6/4682B4?text=Laputa",
    src: "",
  },
];

// Data for the "Featured Playlists" section on the Home view
export const mockFeaturedPlaylists = [
  {
    id: "p1",
    name: "Moonlit Walk",
    description: "Calm tunes for evening strolls.",
    img: "https://placehold.co/300x200/A9C4A9/3A5F0B?text=Moonlit+Walk",
    songCount: 15,
  },
  {
    id: "p2",
    name: "Spirit Dance",
    description: "Energetic Ghibli scores.",
    img: "https://placehold.co/300x200/B0C4DE/8B0000?text=Spirit+Dance",
    songCount: 22,
  },
  {
    id: "p3",
    name: "Forest Whispers",
    description: "Ambient nature sounds.",
    img: "https://placehold.co/300x200/D2B48C/663300?text=Forest+Whispers",
    songCount: 8,
  },
  {
    id: "p4",
    name: "Starry Night",
    description: "Dreamy lullabies.",
    img: "https://placehold.co/300x200/E6E6FA/483D8B?text=Starry+Night",
    songCount: 31,
  },
];

// Data for the Library view items
// Added 'index' linking back to mockPlaylistData for playable items
export const mockLibraryItems = [
  {
    id: "l1",
    index: 0,
    title: "The Path of the Wind",
    artist: "Joe Hisaishi",
    img: "https://placehold.co/150x150/F5F5DC/3A5F0B?text=Totoro",
  },
  {
    id: "l2",
    index: 1,
    title: "One Summer's Day",
    artist: "Joe Hisaishi",
    img: "https://placehold.co/150x150/ADD8E6/8B0000?text=Spirited",
  },
  {
    id: "l3",
    index: 2,
    title: "Merry-Go-Round of Life",
    artist: "Joe Hisaishi",
    img: "https://placehold.co/150x150/D2B48C/663300?text=Howl",
  },
  {
    id: "l4",
    index: 3,
    title: "Carrying You",
    artist: "Azumi Inoue",
    img: "https://placehold.co/150x150/B0E0E6/4682B4?text=Laputa",
  },
  // Example item not directly in the initial playlist:
  {
    id: "l5",
    index: -1,
    title: "A Third Song Here",
    artist: "Studio Ghibli",
    img: "https://placehold.co/150x150/E6F0E6/3A5F0B?text=Album+3",
  },
  {
    id: "l6",
    index: -1,
    title: "The Wind Rises",
    artist: "Joe Hisaishi",
    img: "https://placehold.co/150x150/E6F0E6/3A5F0B?text=Album+4",
  },
];
