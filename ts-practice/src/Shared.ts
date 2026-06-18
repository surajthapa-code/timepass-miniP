export interface Job {
  id: number;
  company: string;
  role: string;
  status: "applied" | "interview" | "rejected" | "offer";
  date: string;
  salary?: number;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
