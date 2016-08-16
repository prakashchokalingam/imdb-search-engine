import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('place-holder-maker', 'Integration | Component | place holder maker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{place-holder-maker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#place-holder-maker}}
      template block text
    {{/place-holder-maker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
