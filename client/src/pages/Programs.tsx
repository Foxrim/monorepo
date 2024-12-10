import { useEffect, useState } from "react";
import styles from "../styles/Progams.module.css";

interface Film {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

export default function Programs() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchFilms() {
      const response = await fetch("http://localhost:3310/api/programs");
      const data = await response.json();
      setFilms(data);
    }
    fetchFilms();
  }, []);

  return (
    <>
      <header>
        <h1>Projet monorepo</h1>
      </header>
      <main className={styles.main}>
        {films.map((film) => (
          <div key={film.id}>
            <h2>{film.title}</h2>
            <img src={film.poster} alt={film.title} />
            <p>{film.synopsis}</p>
            <p>{film.country}</p>
            <p>{film.year}</p>
          </div>
        ))}
      </main>
      <footer>
        <p>Footer Flavien ROUSSEAU</p>
      </footer>
    </>
  );
}
