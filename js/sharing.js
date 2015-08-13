/* jshint unused: false */

var sharing = {

  encodeStr: function(uncoded) {
    var coded = btoa(uncoded);
    return coded;
  },

  decodeStr: function(coded) {
    var uncoded = atob(coded);
    return uncoded;   
  },

  gup: function(name){
    name = name.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');  
    var regexS = '[\\?&]'+name+'=([^&#]*)';  
    var regex = new RegExp( regexS );  
    var results = regex.exec( window.location.href ); 
    if( results == null ) {
      return '';  
    }
    else {
      return results[1];
    }
  }
};
