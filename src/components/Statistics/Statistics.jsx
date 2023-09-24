import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled.js';
import getRandomColor from 'Helpers/getRandomColor';

const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(stat => {
        const randomColor = getRandomColor();
        return (
          <Item key={stat.id} $backgroundColor={randomColor}>
            <Label>{stat.label}</Label>
            <Percentage>{`${stat.percentage}%`}</Percentage>
          </Item>
        );
      })}
    </StatList>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;