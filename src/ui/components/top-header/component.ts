import Component from '@glimmer/component';

export default class TopHeader extends Component {
    user = {
        name: 'Dominik'
    };

    next() {
        console.log("clicked");
    }
};
