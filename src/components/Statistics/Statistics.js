import PropTypes, { arrayOf } from 'prop-types';
export const Statistics = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  stats: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
