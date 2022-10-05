import PropTypes from "prop-types";
import { useFetchGif } from "../../utils/hooks/useFetchGif";
import { GifCard } from "../gif-card/gif-card";

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Loading...</h2>)
      }

      <div className="card-grid">
        {
          gifs.map(image => (
            <GifCard
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}