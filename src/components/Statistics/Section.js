import PropTypes from 'prop-types';
function Section({ title, children }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
}

Section.propType = {
  title: PropTypes.string,
};

export default Section;
