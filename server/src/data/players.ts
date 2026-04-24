// server/src/data/players.ts
export interface Player {
  id: string;
  name: string;
  position: string;
  nationality: string;
  shirtNumber: number;
  teamId: string;
  photo: string;
}

const players: Player[] = [
  // Arsenal
  { id: 'ars-1', name: 'Bukayo Saka', position: 'RW', nationality: 'England', shirtNumber: 7, teamId: 'arsenal', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209289.png' },
  { id: 'ars-2', name: 'Gabriel Jesus', position: 'CF', nationality: 'Brazil', shirtNumber: 9, teamId: 'arsenal', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p178301.png' },
  { id: 'ars-3', name: 'Martin Ãdegaard', position: 'CAM', nationality: 'Norway', shirtNumber: 8, teamId: 'arsenal', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p208658.png' },
  { id: 'ars-4', name: 'William Saliba', position: 'CB', nationality: 'France', shirtNumber: 12, teamId: 'arsenal', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png' },
  { id: 'ars-5', name: 'Aaron Ramsdale', position: 'GK', nationality: 'England', shirtNumber: 1, teamId: 'arsenal', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p171317.png' },

  // Aston Villa
  { id: 'avl-1', name: 'Ollie Watkins', position: 'CF', nationality: 'England', shirtNumber: 11, teamId: 'astonvilla', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p195154.png' },
  { id: 'avl-2', name: 'John McGinn', position: 'CM', nationality: 'Scotland', shirtNumber: 7, teamId: 'astonvilla', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png' },
  { id: 'avl-3', name: 'Emi MartÃ­nez', position: 'GK', nationality: 'Argentina', shirtNumber: 1, teamId: 'astonvilla', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p123241.png' },
  { id: 'avl-4', name: 'Douglas Luiz', position: 'CDM', nationality: 'Brazil', shirtNumber: 6, teamId: 'astonvilla', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p220518.png' },
  { id: 'avl-5', name: 'Matty Cash', position: 'RB', nationality: 'Poland', shirtNumber: 2, teamId: 'astonvilla', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p184042.png' },

  // Bournemouth
  { id: 'bou-1', name: 'Dominic Solanke', position: 'CF', nationality: 'England', shirtNumber: 9, teamId: 'bournemouth', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p154109.png' },
  { id: 'bou-2', name: 'Philip Billing', position: 'CM', nationality: 'Denmark', shirtNumber: 29, teamId: 'bournemouth', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p183854.png' },
  { id: 'bou-3', name: 'Neto', position: 'GK', nationality: 'Brazil', shirtNumber: 1, teamId: 'bournemouth', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p88299.png' },
  { id: 'bou-4', name: 'Marcus Tavernier', position: 'LW', nationality: 'England', shirtNumber: 19, teamId: 'bournemouth', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p216342.png' },
  { id: 'bou-5', name: 'Lloyd Kelly', position: 'CB', nationality: 'England', shirtNumber: 5, teamId: 'bournemouth', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p220982.png' },

  // Brentford
  { id: 'bre-1', name: 'Ivan Toney', position: 'CF', nationality: 'England', shirtNumber: 17, teamId: 'brentford', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p114977.png' },
  { id: 'bre-2', name: 'Bryan Mbeumo', position: 'RW', nationality: 'Cameroon', shirtNumber: 19, teamId: 'brentford', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p218141.png' },
  { id: 'bre-3', name: 'Ben Mee', position: 'CB', nationality: 'England', shirtNumber: 16, teamId: 'brentford', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p41315.png' },
  { id: 'bre-4', name: 'Mathias Jensen', position: 'CM', nationality: 'Denmark', shirtNumber: 8, teamId: 'brentford', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p210775.png' },
  { id: 'bre-5', name: 'David Raya', position: 'GK', nationality: 'Spain', shirtNumber: 1, teamId: 'brentford', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p174354.png' },

  // Brighton
  { id: 'bha-1', name: 'Lewis Dunk', position: 'CB', nationality: 'England', shirtNumber: 5, teamId: 'brighton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p12456.png' },
  { id: 'bha-2', name: 'Evan Ferguson', position: 'CF', nationality: 'Ireland', shirtNumber: 28, teamId: 'brighton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p43372.png' },
  { id: 'bha-3', name: 'Kaoru Mitoma', position: 'LW', nationality: 'Japan', shirtNumber: 22, teamId: 'brighton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p44004.png' },
  { id: 'bha-4', name: 'Pascal GroÃ', position: 'CM', nationality: 'Germany', shirtNumber: 13, teamId: 'brighton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p154597.png' },
  { id: 'bha-5', name: 'Jason Steele', position: 'GK', nationality: 'England', shirtNumber: 23, teamId: 'brighton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p11311.png' },

  // Remaining teams... [For brevity, only 6 teams expanded. Add 5 players for each of the other 14 teams as above.]
  // Chelsea
  { id: 'che-1', name: 'Enzo FernÃ¡ndez', position: 'CM', nationality: 'Argentina', shirtNumber: 8, teamId: 'chelsea', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p226225.png' },
  { id: 'che-2', name: 'Raheem Sterling', position: 'LW', nationality: 'England', shirtNumber: 7, teamId: 'chelsea', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p110581.png' },
  { id: 'che-3', name: 'Thiago Silva', position: 'CB', nationality: 'Brazil', shirtNumber: 6, teamId: 'chelsea', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p33805.png' },
  { id: 'che-4', name: 'Reece James', position: 'RB', nationality: 'England', shirtNumber: 24, teamId: 'chelsea', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p225940.png' },
  { id: 'che-5', name: 'Robert SÃ¡nchez', position: 'GK', nationality: 'Spain', shirtNumber: 1, teamId: 'chelsea', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p216934.png' },

  // Crystal Palace
  { id: 'cry-1', name: 'Eberechi Eze', position: 'CAM', nationality: 'England', shirtNumber: 10, teamId: 'crystalpalace', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p223497.png' },
  { id: 'cry-2', name: 'Michael Olise', position: 'RW', nationality: 'France', shirtNumber: 7, teamId: 'crystalpalace', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p242710.png' },
  { id: 'cry-3', name: 'Joachim Andersen', position: 'CB', nationality: 'Denmark', shirtNumber: 16, teamId: 'crystalpalace', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p176519.png' },
  { id: 'cry-4', name: 'Marc GuÃ©hi', position: 'CB', nationality: 'England', shirtNumber: 6, teamId: 'crystalpalace', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p225239.png' },
  { id: 'cry-5', name: 'Sam Johnstone', position: 'GK', nationality: 'England', shirtNumber: 1, teamId: 'crystalpalace', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p15417.png' },

  // Everton
  { id: 'eve-1', name: 'Jordan Pickford', position: 'GK', nationality: 'England', shirtNumber: 1, teamId: 'everton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p15430.png' },
  { id: 'eve-2', name: 'Dominic Calvert-Lewin', position: 'CF', nationality: 'England', shirtNumber: 9, teamId: 'everton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p184217.png' },
  { id: 'eve-3', name: 'Idrissa Gana Gueye', position: 'CDM', nationality: 'Senegal', shirtNumber: 27, teamId: 'everton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p117297.png' },
  { id: 'eve-4', name: 'James Tarkowski', position: 'CB', nationality: 'England', shirtNumber: 5, teamId: 'everton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118217.png' },
  { id: 'eve-5', name: 'Dwight McNeil', position: 'LW', nationality: 'England', shirtNumber: 7, teamId: 'everton', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p217960.png' },

  // Fulham
  { id: 'ful-1', name: 'Bernd Leno', position: 'GK', nationality: 'Germany', shirtNumber: 17, teamId: 'fulham', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p180746.png' },
  { id: 'ful-2', name: 'Andreas Pereira', position: 'CAM', nationality: 'Brazil', shirtNumber: 18, teamId: 'fulham', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p180261.png' },
  { id: 'ful-3', name: 'Willian', position: 'LW', nationality: 'Brazil', shirtNumber: 20, teamId: 'fulham', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p178291.png' },
  { id: 'ful-4', name: 'Tim Ream', position: 'CB', nationality: 'USA', shirtNumber: 13, teamId: 'fulham', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p77097.png' },
  { id: 'ful-5', name: 'JoÃ£o Palhinha', position: 'CDM', nationality: 'Portugal', shirtNumber: 26, teamId: 'fulham', photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p210501.png' },

  // [Continue for all 20 teams: 5 players each, as above, with unique id, name, position, nationality, shirtNumber, photo, teamId]
];

export default players;
