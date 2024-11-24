import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TaskType, TaskDifficulty, TaskResult } from '../types/task';
import { useTaskGenerator } from '../hooks/use-task-generator';

interface InteractiveTaskProps {
  type: TaskType;
  difficulty: TaskDifficulty;
  onComplete: (result: TaskResult) => void;
}

export const InteractiveTask: React.FC<InteractiveTaskProps> = ({
  type,
  difficulty,
  onComplete,
}) => {
  const [startTime] = useState(Date.now());
  const [attempts, setAttempts] = useState(0);
  const [userInput, setUserInput] = useState('');
  const { generateMathProblem, generateTypingChallenge } = useTaskGenerator();

  const [task] = useState(() => {
    switch (type) {
      case 'math':
        return generateMathProblem(difficulty);
      case 'typing':
        return generateTypingChallenge(difficulty);
      default:
        return null;
    }
  });

  const handleSubmit = () => {
    setAttempts(prev => prev + 1);
    
    if (!task) return;
    
    let isCorrect = false;
    if (type === 'math' && 'answer' in task) {
      isCorrect = Number(userInput) === task.answer;
    } else if (type === 'typing' && 'text' in task) {
      const accuracy = calculateTypingAccuracy(userInput, task.text);
      isCorrect = accuracy >= task.minAccuracy;
    }

    if (isCorrect) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      onComplete({
        completed: true,
        attempts,
        timeSpent,
      });
    } else {
      setUserInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Complete this task to dismiss the alarm
      </Text>
      
      <View style={styles.taskContainer}>
        {type === 'math' && task && 'question' in task && (
          <>
            <Text style={styles.question}>{task.question}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userInput}
              onChangeText={setUserInput}
              placeholder="Enter your answer"
            />
          </>
        )}

        {type === 'typing' && task && 'text' in task && (
          <>
            <Text style={styles.text}>{task.text}</Text>
            <TextInput
              style={styles.input}
              value={userInput}
              onChangeText={setUserInput}
              placeholder="Type the text above"
              multiline
            />
          </>
        )}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.attempts}>
        Attempts: {attempts}
      </Text>
    </View>
  );
};

const calculateTypingAccuracy = (input: string, target: string): number => {
  let correct = 0;
  const maxLength = Math.max(input.length, target.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (input[i] === target[i]) correct++;
  }
  
  return (correct / maxLength) * 100;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  taskContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  attempts: {
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
  },
}); 