function update(){
    _e('btn').addEventListener('click', function() {
    _e('demo').innerHTML = 'Hey There';
  }, false);

function _e(id) {
   return document.getElementById(id);
 }
}
