import React from 'react';
//this page is meant for dividing the projects into its 3 categories
//will work on this later, possibly in the revised version
const Choices = ({ onSelectCategory }) => {
  return (
    <div>
      <button onClick={() => onSelectCategory('web')}>Web</button>
      <button onClick={() => onSelectCategory('android')}>Android</button>
      <button onClick={() => onSelectCategory('embedded')}>Embedded</button>
      <button onClick={() => onSelectCategory('all')}>All</button>
    </div>
  );
};

export default Choices;