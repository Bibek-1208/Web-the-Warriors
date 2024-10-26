import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {

    return (
      <ul>
        {seriesData.map((seriesDataItem) => {
          return (
            <li key={seriesDataItem.id}>
              <div>
                <img className='h-80 w-auto' src={seriesDataItem.img_url} alt="queen-of-tears" />
                <h2 >Name: {seriesDataItem.name} </h2>
                <h3>Rating: {seriesDataItem.rating}</h3>
                <p>Summery: {seriesDataItem.description} </p>
                <p>Genre: {seriesDataItem.genre}</p>
                <a href={seriesDataItem.watch_url} target="_blank">
                  <button> Watch Now </button>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    );
};

export default NetflixSeries;
