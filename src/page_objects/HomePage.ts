import { HomePage } from 'nightwatch'

module.exports = {
  elements: {
    title: {
      selector: '//h1',
      locateStrategy: 'xpath'
    }
  },
  commands: {
    validateTitle(this: HomePage): HomePage {
      return this.waitForElementVisible('@title', 1000)
    },
    clickButtonOnIframe(this: HomePage) {
      return this.api.elements('tag name', 'IFRAME', items => {
        Object.keys(items.value).forEach(element => {
          console.log(items.value[element])
          this.api.frame(items.value[element], (result) => {
            console.log(result)
          }).waitForElementPresent('BUTTON', 1000)
            .getText('H2', result => {
              console.log(result)
            })
            .frameParent()
        });
      })
    },
    getAllElements(this: HomePage) {
      return this.api.elements(
        this.elements.title.locateStrategy, 
        this.elements.title.selector, 
        (items) => {
          Object.keys(items.value).forEach(element => {
            console.log(items.value[element])
            console.log(items.value[element].ELEMENT)
            // browser.getText(items.value[element].ELEMENT, result => {
            //   console.log(result)
            // })
    
            this.api.elementIdAttribute(items.value[element].ELEMENT, 'innerText', function(res) {
              console.log(res)
            })
          });
        }
      )
    }
  }
}