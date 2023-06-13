const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/app/app.ts', // 프로젝트의 진입점 파일
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 경로
    filename: 'bundle.js', // 번들된 파일의 이름
  },
  module: {
    rules: [
      // 웹팩 로더 설정
      {
        test: /\.js$/, // .js 확장자를 가진 파일에 대해
        exclude: /node_modules/, // node_modules 디렉토리는 제외
        use: 'babel-loader', // babel-loader를 사용하여 변환
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 임포트 시 확장자 생략 가능
  },
};
