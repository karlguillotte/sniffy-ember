import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('sniffy-icon', 'SniffyIconComponent', {
	// specify the other units that are required for this test
	// needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
	expect(2);

	// creates the component instance
	var component = this.subject();
	equal(component.state, 'preRender');

	// appends the component to the page
	this.append();
	equal(component.state, 'inDOM');
});


test('has some defaults', function() {
	expect(1);

	var component = this.subject();

	equal(component.tagName, 'sniffy-icon', 'has sniffy-icon as tagName.');

});

