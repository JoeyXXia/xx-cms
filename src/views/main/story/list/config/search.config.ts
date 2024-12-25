export const searchFormConfig = {
  pageName: 'list',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '故事名称',
      placeHolder: '请输入故事名称',
      rules: []
    },
    {
      field: 'address',
      type: 'input',
      label: '故事地址',
      placeHolder: '请输入故事地址',
      rules: []
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeHolder: '请选择状态',
      rules: [],
      options: [
        { label: '可用', value: 1 },
        { label: '下架', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 }
}