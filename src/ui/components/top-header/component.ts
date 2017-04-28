import Component, { tracked } from '@glimmer/component';

export default class TopHeader extends Component {
    @tracked
    counter: number;
    
    user = {
        name: 'Dominik'
    };

    constructor(options) {
        super(options);

        this.counter = 0;
    }

    next() {
        console.log("clicked");
        this.counter += 1;
    }
};
