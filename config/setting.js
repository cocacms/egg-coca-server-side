'use strict';

module.exports = [
  {
    key: 'string',
    type: 'string',
    label: '短文本',
    required: true,
  },
  {
    key: 'text',
    type: 'text',
    label: '长文本',
    required: true,
  },

  {
    key: 'radio',
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
    key: 'checkbox',
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
    key: 'number',
    type: 'number',
    label: '数字',
    required: true,
  },

  {
    key: 'img',
    type: 'img',
    label: '图片',
    required: true,
    props: {
      max: 1,
    },
  },

  {
    key: 'rich',
    type: 'rich',
    label: '富文本',
    required: true,
  },
];
