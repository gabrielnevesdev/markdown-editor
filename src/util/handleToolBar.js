function handleToolBar(e, type) {
    //captura o valor selecionado na textarea
    var ta = document.querySelector("textarea");
    var start = ta.selectionStart;
    var end = ta.selectionEnd;
    const selection = ta.value.substring(start, end);

    if (e === "bold") {
        ta.value = ta.value.substring(0, start) + "**" +
            selection + "**" +
            ta.value.substring(end);
    }

    else if (e === "italic") {
        ta.value = ta.value.substring(0, start) + "*" +
            selection + "*" +
            ta.value.substring(end);
    }

    else if (e === "strike") {
        ta.value = ta.value.substring(0, start) + "~~" +
            selection + "~~" +
            ta.value.substring(end);
    }

    else if (e === "code") {
        if (type === "line") {
            ta.value = ta.value.substring(0, start) + "`" +
                selection + "`" +
                ta.value.substring(end);
        }
        else {
            ta.value = ta.value.substring(0, start) + "``` \n" +
                selection + "\n"+"```" +
                ta.value.substring(end);
        }
    }

    else if (e === "header") {

        if (type === "1") {
            ta.value = ta.value.substring(0, start) + "# " +
                selection + "\n" +
                ta.value.substring(end);
        }
        else if (type === "2") {
            ta.value = ta.value.substring(0, start) + "## " +
                selection + "\n" +
                ta.value.substring(end);
        }
        else if (type === "3") {
            ta.value = ta.value.substring(0, start) + "### " +
                selection + "\n" +
                ta.value.substring(end);
        }
        else if (type === "4") {
            ta.value = ta.value.substring(0, start) + "#### " +
                selection + "\n" +
                ta.value.substring(end);
        }
    }
    else if (e === "link") {
        ta.value = ta.value.substring(0, start) + "[" +
            selection + "](" +
            "http://" +
            ")";
    }
}

export default handleToolBar