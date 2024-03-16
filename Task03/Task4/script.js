function showResult() {
  var tagName = document.getElementById('tagName').value.toLowerCase();
  var className = document.getElementById('className').value;
  var idName = document.getElementById('idName').value;
  var name = document.getElementById('name').value;

  var tagElements = document.getElementsByTagName(tagName);

  var classElements = document.getElementsByClassName(className);

  var checkId = document.getElementById(idName) ? true : false;

  var nameElements = document.getElementsByName(name);

  // var resultText = `Number of ${tagName.toUpperCase()} Tags: ${
  //   tagElements.length
  // }\n`;
  // resultText += `Number of Elements with Class ${className}: ${classElements.length}\n`;
  // resultText += `Element with Id ${idName}: ${checkId}\n`;
  // resultText += `Number of Elements with Name ${name}: ${nameElements.length}\n`;

  var resultText =
    'Number of ' +
    tagName.toUpperCase() +
    ' Tags: ' +
    tagElements.length +
    '\n';
  resultText +=
    'Number of Elements with Class ' +
    className +
    ': ' +
    classElements.length +
    '\n';
  resultText += 'Element with Id ' + idName + ': ' + checkId + '\n';
  resultText +=
    'Number of Elements with Name ' + name + ': ' + nameElements.length + '\n';

  document.getElementById('result').innerText = resultText;
}
