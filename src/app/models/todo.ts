export interface Todo {
  name: string;
  created: FirebaseTime;
  completed: boolean;
}

interface FirebaseTime {
  nanoseconds: number;
  seconds: number;
}
