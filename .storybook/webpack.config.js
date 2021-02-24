const path = require('path')

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test('.svg'),
  )
  fileLoaderRule.exclude = path.resolve(__dirname, '../')

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          memo: true,
          svgoConfig: {
            plugins: [
              {
                // cleanupIDs: false,
                addAttributesToSVGElement: {
                  attributes: ['preserveAspectRatio="xMinYMid meet"'],
                },
              },
            ],
          },
        },
      },
    ],
  })

  return config
}
