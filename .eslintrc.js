module.exports = {
  extends: ['standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 0,
    'vue/no-v-model-argument': 'off',
    'indent': 'off',
    'no-throw-literal': 0,
  },
}
