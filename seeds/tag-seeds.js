const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Jazz music',
  },
  {
    tag_name: 'Classical music',
  },
  {
    tag_name: 'peach',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'sea-green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'indian culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
