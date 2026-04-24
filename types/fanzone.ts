export type ForumCategory = {
  id: number;
  name: string;
};

export type Forum = {
  id: number;
  title: string;
  description: string;
  categoryId: number;
};

export type ForumTopic = {
  id: number;
  title: string;
  forumId: number;
  authorId: number;
  createdAt: string;
};

export type ForumPost = {
  id: number;
  content: string;
  topicId: number;
  authorId: number;
  createdAt: string;
};

export type Poll = {
  id: number;
  question: string;
  options: PollOption[];
  authorId: number;
  createdAt: string;
};

export type PollOption = {
  id: number;
  text: string;
  pollId: number;
  votes: PollVote[];
};

export type PollVote = {
  id: number;
  userId: number;
  optionId: number;
  createdAt: string;
};

export type MatchPrediction = {
  id: number;
  match: string;
  predictedWinner: string;
  userId: number;
  createdAt: string;
};
