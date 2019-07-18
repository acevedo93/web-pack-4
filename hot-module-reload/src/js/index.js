import '../css/styles.css'
import drawText from './drawText';

drawText()

if(module.hot) {
  module.hot.accept('./drawText', function(){
    console.log('Haciendo el hot reload')
    drawText()
  })
}