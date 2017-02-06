let angular = require('angular')
let cowsay = require('cowsay-browser')

describe('Cowsay Controller', function () {
  beforeEach(() => {
    angular.mock.module('cowsayApp')
    angular.mock.inject($controller => {
      this.cowsayCtrl = controller('CowsayController')
    })
  })

  describe('initial properties', () => {
    it('should have a title that says Welcome to Cowville!', () => {
      expect(this.cowsayCtrl.title).toBe('Welcome to Cowville!')
    })
  })
})
