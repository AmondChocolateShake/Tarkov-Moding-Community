const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/app/app.tsx', // 프로젝트의 진입점 파일
  output: {
    path: path.resolve(__dirname+'/src', 'dist'), // 번들된 파일의 출력 경로
    filename: 'bundle.js', // 번들된 파일의 이름
  },
  module: {
    rules: [
      // 웹팩 로더 설정
      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, // .js 확장자를 가진 파일에 대해
        exclude: /node_modules/, // node_modules 디렉토리는 제외
        use: {
          
          loader:'babel-loader', // babel-loader를 사용하여 변환
          options:{
            presets:["@babel/preset-env", "@babel/preset-react"],
          }
        } 
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './src/dist/img/[name].[hash].[ext]', // 이미지 파일이 복사될 경로 및 파일명 패턴
              publicPath:'./src/img'
            },
          },
        ],
      },
      
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/app/index.html',
      filename:'index.html',
      inject:'body'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 임포트 시 확장자 생략 가능
  },
};
