import { collection, addDoc } from 'firebase/firestore';

import { database } from 'config/configFirebase';

interface Item {
    nameCollection: string;
    item: any;
}

const onSaveItem = ({ nameCollection, item }: Item) => {
    const query = new Promise((resolve, reject) => {
        addDoc(collection(database, nameCollection), item)
            .then(() => resolve(true))
            .catch((err) => reject(new Error(err)));
    });
    return query;
};

export {
    onSaveItem,
};