import { create } from "zustand";
import { databases } from "../appwrite/appwrite";
import { ID, Query } from "appwrite";

export const useDB = create((set, get) => ({
  db_id: "66fff821003498436cc9",
  db_col_id: "66fff87e0029b52ec4e2",
  ideas: [],
  setIdea: async (data) => {
    const response = await databases.createDocument(
      get().db_id,
      get().db_col_id,
      ID.unique(),
      data
    );
    set((state) => ({
      ideas: [...state.ideas, response],
    }));
  },

  removeIdea: async (id) => {
    await databases.deleteDocument(get().db_id, get().db_col_id, id);
    set((state) => ({
      ideas: state.ideas.filter((idea) => idea.$id !== id),
    }));
  },

  getAll: async (id) => {
    const response = await databases.listDocuments(
      get().db_id,
      get().db_col_id,
        [Query.equal("userId",id), Query.orderAsc("$createdAt")]
    );
    set(() => ({
      ideas: response.documents,
    }));
  },
}));
