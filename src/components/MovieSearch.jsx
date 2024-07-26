import PropType from "prop-types";

const MovieSearch = (title) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropType.string,
  data: PropType.array,
};

export default MovieSearch;
