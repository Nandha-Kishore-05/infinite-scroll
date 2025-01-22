import { create } from 'zustand';

type DummyData = {
  id: string;
  title: string;
  description: string;
};

interface DummyState {
  data: DummyData[];
  fetchDummyData: (count: number) => Promise<void>;
}

export const useDummyStore = create<DummyState>((set) => ({
  data: [],
  fetchDummyData: async (count: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${count}`
    );
    const result = await response.json();
    set(() => ({
      data: result.map((item: any) => ({
        id: item.id.toString(),
        title: item.title,
        description: item.body,
      })),
    }));
  },
  
}));
