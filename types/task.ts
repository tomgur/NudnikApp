export type TaskType = 'math' | 'puzzle' | 'typing';
export type TaskDifficulty = 'easy' | 'medium' | 'hard';

export interface TaskConfig {
  type: TaskType;
  difficulty: TaskDifficulty;
}

export interface TaskResult {
  completed: boolean;
  attempts: number;
  timeSpent: number; // in seconds
}

// Task-specific interfaces
export interface MathProblem {
  question: string;
  answer: number;
  options?: number[]; // For multiple choice
}

export interface TypingChallenge {
  text: string;
  minAccuracy: number;
}

export interface PuzzleChallenge {
  imageUrl: string;
  pieces: number;
  correctOrder: number[];
} 