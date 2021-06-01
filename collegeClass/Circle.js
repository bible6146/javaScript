function showCircle(cx, cy, radius,msg) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.style.backgroundColor = 'red';
    div.style.borderRadius = '50%';
    div.className = 'circle';
    document.body.append(div);
  
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 10);
  };
  