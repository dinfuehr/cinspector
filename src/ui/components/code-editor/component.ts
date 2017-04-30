import Component from '@glimmer/component';

export default class CodeEditor extends Component {
    didInsertElement() {
        var editor = ace.edit("code-editor");
        editor.setTheme("ace/theme/solarized_light");
        editor.getSession().setMode("ace/mode/c_cpp");
        editor.getSession().on('change', () => {
            this.editorChanged();
        });
        editor.setOptions({
            fontSize: '11pt'
        });
    }

    editorChanged() {
        if(this.timeout)
            window.clearTimeout(this.timeout);

        this.timeout = window.setTimeout(() => {
            this.compile();
        }, 500);
    }

    compile() {
        console.log("compile");
    }
};
