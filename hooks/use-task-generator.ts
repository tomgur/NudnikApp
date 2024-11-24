import { TaskType, TaskDifficulty, MathProblem, TypingChallenge, PuzzleChallenge } from '../types/task';

export const useTaskGenerator = () => {
  const generateMathProblem = (difficulty: TaskDifficulty): MathProblem => {
    let num1: number, num2: number, operator: string;
    
    switch (difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        operator = '+';
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 50);
        num2 = Math.floor(Math.random() * 50);
        operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
        operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        break;
    }

    const question = `${num1} ${operator} ${num2}`;
    let answer: number;
    
    switch (operator) {
      case '+': answer = num1 + num2; break;
      case '-': answer = num1 - num2; break;
      case '*': answer = num1 * num2; break;
      case '/': answer = Number((num1 / num2).toFixed(2)); break;
      default: answer = 0;
    }

    return { question, answer, options: generateOptions(answer) };
  };

  const generateTypingChallenge = (difficulty: TaskDifficulty): TypingChallenge => {
    const challenges: Record<TaskDifficulty, TypingChallenge> = {
      easy: {
        text: "The quick brown fox jumps over the lazy dog",
        minAccuracy: 80
      },
      medium: {
        text: "Pack my box with five dozen liquor jugs! How vexingly quick daft zebras jump.",
        minAccuracy: 90
      },
      hard: {
        text: "The five boxing wizards jump quickly! Pack my red box with five dozen quality jugs.",
        minAccuracy: 95
      }
    };

    return challenges[difficulty];
  };

  return {
    generateMathProblem,
    generateTypingChallenge,
  };
};

const generateOptions = (answer: number): number[] => {
  const options = [answer];
  while (options.length < 4) {
    const offset = Math.floor(Math.random() * 10) - 5;
    const option = answer + offset;
    if (!options.includes(option)) {
      options.push(option);
    }
  }
  return options.sort(() => Math.random() - 0.5);
}; 