import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatsBox,
  StatItem,
  StatTitle,
} from './Statics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatsBox>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatTitle>{label}</StatTitle>
            <StatTitle>{percentage}</StatTitle>
          </StatItem>
        ))}
      </StatsBox>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
