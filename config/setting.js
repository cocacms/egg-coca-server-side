'use strict';

module.exports = [
  {
    name: 'string',
    type: 'string',
    label: '短文本',
    required: true,
  },
  {
    name: 'text',
    type: 'text',
    label: '长文本',
    required: true,
  },

  {
    name: 'radio',
    type: 'radio',
    label: '单选',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    required: true,
  },

  {
    name: 'checkbox',
    type: 'checkbox',
    label: '多选',
    options: [
      {
        label: 'A',
        value: 'a',
      },
      {
        label: 'B',
        value: 'b',
      },
    ],
    required: true,
  },

  {
    name: 'number',
    type: 'number',
    label: '数字',
    required: true,
  },

  {
    name: 'img',
    type: 'img',
    label: '图片',
    // required: true,
    props: {
      max: 1,
    },
  },

  {
    name: 'rich',
    type: 'rich',
    label: '富文本',
    required: true,
  },

  {
    name: 'markdown',
    type: 'markdown',
    label: '富文本',
    required: true,
  },
];
