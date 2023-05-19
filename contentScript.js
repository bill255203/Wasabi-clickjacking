function preventClickjacking() {
    var style = document.createElement('style');
    style.innerHTML = 'html { display:none !important; }';
    document.head.appendChild(style);
  
    if (self == top) {
      document.documentElement.style.display = 'block';
    } else {
      top.location = self.location;
    }
  }
  
  preventClickjacking();
  