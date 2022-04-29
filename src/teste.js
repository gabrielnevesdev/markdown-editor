function highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, code).value;
        } catch (err) {
            console.error(err);
        }
    }

    try {
        return hljs.highlightAuto(code).value;
    } catch (err) {
        console.error(err);
    }

    return code;
}

