import Component from "@glimmer/component";

export default class Cinspector extends Component {
    error = "some thing";
    
    get viewDumps() {
        return false;
    }
}
