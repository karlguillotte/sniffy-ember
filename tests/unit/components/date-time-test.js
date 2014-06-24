/* global moment */

import { test, moduleForComponent } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('date-time', 'DateTimeComponent', {
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
    expect(12);

    var component = this.subject();
    
    equal(component.format, 'LL', 'Default DateTime format should be "LL"');
    
    ok(Ember.typeOf(component.get('time')) === 'date', 'DateTime time should be a date');

    ok(component.get('autoUpdate') === false, 'DateTime should not auto update by default');
    
    ok(component.get('type') === null, 'DateTime type should be null by default');

    ok(component.tagName === 'time', 'DateTime tagName should be time by default');

    ok(component.get('text'), 'DateTime should have a text by default');
    ok(Ember.typeOf(component.get('text')) === 'string', 'DateTime time should be a string');

    ok(component.get('title'), 'DateTime should have a title by default');
    ok(Ember.typeOf(component.get('title')) === 'string', 'DateTime time should be a string');

    equal(component.get('text'), moment(component.get('time')).format(component.get('format')), "DateTime should have a text that format today's date by default");

    equal(component.get('title'), moment(component.get('time')).format(), "DateTime should have a title that format today's date by default (long)");
    
    equal(component.get('text'), this.$().text().trim(), "DateTime should have a text that format today's date by default");
});

test('can be created with a given time and format', function() {
    expect(2);

    var time = new Date(1403496074900);
    var format = 'LL';
    var component = this.subject({
        time: time,
        format: format
    });

    equal(component.get('text'), moment(time).format(format), 'DateTime should have a text property that format the time with the format property');

    equal(component.get('title'), moment(time).format(), 'DateTime should have a title by default');
});


test('DateTime can auto update in relative mode', function() {
    expect(3);

    var component = this.subject({
        type: 'relative',
        time: new Date(0)
    });

    equal(component.get('autoUpdate'), true, 'DateTime auto update automatically if type === "relative"');
    
    notEqual(component.get('text'), 'a few seconds ago', 'A relative DateTime starts with text "a few seconds ago"');
    
    component.set('time', new Date());

    equal(component.get('text'), 'a few seconds ago', 'A relative DateTime starts with text "a few seconds ago"');
});




