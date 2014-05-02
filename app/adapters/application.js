/* global Firebase */

export default DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://sniffy.firebaseio.com")
});