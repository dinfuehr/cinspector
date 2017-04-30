import Component from '@glimmer/component';

export default class PassChooser extends Component {
    passes = [ {
        name: "a"
    }, {
        name: "b"
    }, {
        name: "c"
    }];

    passSelected(val, selected) {
        console.log(val);
        console.log(selected);
        console.log(val.value);
        console.log(val.selected);
        console.log(val.selectedIndex);
        console.log("pass selected");
    }
};
