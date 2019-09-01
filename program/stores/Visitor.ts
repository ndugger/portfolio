import * as Cortex from 'cortex';

type VisitorStoreData = {
    welcomed: boolean;
}

type VisitorStoreEvents = {
    hello: Event;
}

const Visitor = new Cortex.Store<VisitorStoreData, VisitorStoreEvents>({
    welcomed: false
});

export default Visitor;
