'use strict'
/* global describe, it */

const assert = require('assert')

describe('Slug Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Slug'])
  })
})
