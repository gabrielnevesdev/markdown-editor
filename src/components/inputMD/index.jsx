function limitarTextArea(campo) {
  var string = campo.value;
  var novastring = "";
  var linhas = new Array();
  var trocarLinha = false;
  let x;
  linhas = string.split("\n");
  var contador = linhas.length;
  console.log(contador);
  for (x in linhas) {
    if (linhas[x].length > campo.cols - 2) {
      linhas[x] = linhas[x].substring(0, campo.cols);
      trocarLinha = true;
    }
    if (x < campo.rows) {
      novastring += linhas[x] + "\n";
    }
  }

  if (contador > campo.rows || trocarLinha) {
    campo.value = novastring.substring(0, novastring.length - 1);
  }
  return contador <= campo.rows;
}

function InputMd({ markdownText, onChange }) {
  return (
    <div className="card-body">
      {/* TextArea para digitar o Markdown */}

      <textarea
        className="form-control markdown-textarea"
        rows={20}
        value={markdownText}
        onChange={onChange}
        style={{ resize: 'none' }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            limitarTextArea(e.target);
          }
        }}
      ></textarea>
    </div>
  )
}

export default InputMd;

