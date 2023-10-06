type RacePracticeType = {
  date: string;
  time: string;
};

type RaceLocationType = {
  lat: string;
  long: string;
  locality: string;
  country: string;
};

type RaceCircuitType = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: RaceLocationType;
};

export type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  date: string;
  time: string;
  Circuit: RaceCircuitType;
  FirstPractice: RacePracticeType;
  SecondPractice: RacePracticeType;
  ThirdPractice: RacePracticeType;
  Qualifying: RacePracticeType;
};
