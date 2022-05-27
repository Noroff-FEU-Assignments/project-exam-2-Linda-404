import Image from "next/image";
import Link from "next/link";

const resultsPosterUrl = "https://image.tmdb.org/t/p/w92";

export default function AdvancedSearchResults({ movies }) {
  return (
    <div className="requested__results">
      {movies.map((movie, index) => (
        <Link key={index} href={`/movieDetails/${movie.id}`} passHref>
          <a>
            <div className="results__item">
              <Image
                src={resultsPosterUrl + movie.attributes.poster_url}
                width="70"
                height="100"
                alt={movie.attributes.title}
              />
              <div className="results__description">
                <h5 key={index}>{movie.attributes.title}</h5>
                <h5>{movie.attributes.release_date}</h5>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
