let element = prompt("調べたいタグを入力してください ex: div");
element = element.toUpperCase();
console.log(element);
let wantToCheckNode = [];

//第一引数にルート、第二引数に調べたい要素
function checkNodeTree(node, element) {
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].nodeType === 1) {
      if (node.childNodes[i].tagName === element) {
        wantToCheckNode.push(node.childNodes[i]);
      }
      checkNodeTree(node.childNodes[i], element);
    }
  }
}

checkNodeTree(document, element);
console.log(wantToCheckNode);
document.body.innerHTML +=
  element + "タグの数は" + wantToCheckNode.length + "個です。";
