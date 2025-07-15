// src/types/counterTypes.ts

export interface CounterState {
  count: number;
}

type CounterAction =
  | { type: 'INCREMENT'; payload?: number }
  | { type: 'DECREMENT'; payload?: number }
  | { type: 'RESET' };

export type { CounterAction };