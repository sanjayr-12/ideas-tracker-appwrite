import { useEffect } from "react";
import { useStore } from "../store/auth";
import { useDB } from "../store/db";
import "../index.css";

export const Ideas = () => {
  const setIdea = useDB((state) => state.setIdea);
  const user = useStore((state) => state.user);
  const ideas = useDB((state) => state.ideas);
  const getAll = useDB((state) => state.getAll);
  const removeIdea = useDB((state) => state.removeIdea);

  useEffect(() => {
    getAll(user.$id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title");
    const description = data.get("description");
    setIdea({ userId: user.$id, title, description });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <br />
        <textarea name="description"></textarea>
        <br />
        <input type="submit" />
      </form>

      <div>
        {ideas.map((idea) => {
          return (
            <div key={idea.$id}>
              <p>{idea.title}</p>
              <p>{idea.description}</p>
              <button onClick={() => removeIdea(idea.$id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
