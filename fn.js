function del(){
  document.getElementById("removeh").remove();
  document.getElementById("remove1").remove();
  document.getElementById("remove2").remove();
}

function build(x) {
  switch (d[x].type) {
    case "sel":
      h = document.createElement("h1");
      b1 = document.createElement("button");
      b2 = document.createElement("button");
      h.textContent = d[x].head;
      b1.textContent = d[x].t1;
      b2.textContent = d[x].t2;
      b1.className += 'select';
      b2.className += 'select';
      h.id = 'removeh';
      b1.id = 'remove1';
      b2.id = 'remove2';
      b1.onclick = function(){
        del();
        build(x+"1");
      };
      b2.onclick = function(){
        del();
        build(x+"2");
      };
      document.body.append(h);
      document.body.append(b1);
      document.body.append(b2);
      break;
    case "guide":
      h = document.createElement("h1");
      b = document.createElement("button");
      i = document.createElement("img");
      h.textContent = d[x].head;
      b.textContent = '다음';
      i.src = 'za/'+d[x].img;
      b.className += 'confirm';
      b.id = 'removeb';
      b.onclick = function(){
        document.getElementById("removeb").remove();
        document.getElementById("removei").remove();
        build(x+"0");
      };
      i.className += 'bimg';
      i.id = 'removei';
      document.body.append(i);
      document.body.append(h);
      document.body.append(b);
      break;
    case "end":
      h = document.createElement("h1");
      b = document.createElement("button");
      h.textContent = "당황하지 않고, 침착해야 합니다";
      b.textContent = '처음 화면으로 돌아가기';
      b.onclick = function(){
        window.location.assign("../index.html");
      }
      b.className += 'end';
      document.body.append(h);
      document.body.append(b);
      break;
  }
}

window.onload = function() {
  build("")
}