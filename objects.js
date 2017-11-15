var playlist = {artistName: "song"}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}


function removeFromPlaylist(obj, key, value){
  delete obj[key]
  return Object.assign({}, obj, {[key]: value})
}
