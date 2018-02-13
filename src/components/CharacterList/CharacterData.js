const characterData = [
  {
    name: 'Dexter \'The Great\' Drake',
    class: 'Magician',
    sanityMax: 5,
    staminaMax: 5,
    home: 'Ye Olde Magick Shoppe',
    focus: 2,
    min: {
      speed: 2,
      sneak: 1,
      fight: 1,
      will: 0,
      lore: 2,
      luck: 0,
    },
    wallet: 5,
    clues: 0,
    items: ['Shrivelling', 'Bind Monster', 'Whiskey', 'Cursed Sphere'],
    skills: ['Dodge'],
    ability: {
      name: 'Magical Gift',
      description: '"The Great" Drake has more options to choose from when learning spells.', 
    }
  },
  {
    name: 'Gloria Goldberg',
    class: 'Author',
    sanityMax: 6,
    staminaMax: 4,
    home: 'Velma\'s Diner',
    focus: 2,
    min: {
      speed: 1,
      sneak: 0,
      fight: 0,
      will: 2,
      lore: 1,
      luck: 2,
    },
    wallet: 7,
    clues: 2,
    items: ['Foresee', 'Dusty Manuscript', 'Map of Arkham'],
    skills: ['Bravery'],
    ability: {
      name: 'Otherworldly Intuition',
      description: 'Gloria Goldberg has more options to choose from when navigating Other Worlds.', 
    }
  },
  {
    name: 'Kate Winthrop',
    class: 'Scientist',
    sanityMax: 6,
    staminaMax: 4,
    home: 'Science Building',
    focus: 1,
    min: {
      speed: 1,
      sneak: 2,
      fight: 1,
      will: 0,
      lore: 2,
      luck: 1,
    },
    wallet: 7,
    clues: 2,
    items: ['Alien Device', 'Bind Monster', 'Map of Arkham'],
    skills: ['Ancient Language'],
    ability: { 
      name: 'Scranton-Winthrop Reality Anchor',
      description: 'Kate Winthrop\'s one-of-a-kind prototype prevents monsters and gates from materializing in her location.',
    }
  },
]

export default characterData;