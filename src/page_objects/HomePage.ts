import { HomePage, ModalSection, ModalFooterSection, NightwatchBrowser } from 'nightwatch';

module.exports = {
  sections: {
    hero: {
      selector: '//section[@class="hero"]',
      locateStrategy: 'xpath',
      elements: {
        slide: {
          selector: './/div[@class="slide"]',
          locateStrategy: 'xpath',
        },
      },
    },
    questions: {
      selector: '//section[@class="questions"]',
      locateStrategy: 'xpath',
      elements: {
        listItems: {
          selector: './/ul[contains(@class,"list")]//li',
          locateStrategy: 'xpath',
        },
      },
    },
    modal: {
      selector: '//div[@class="modal modal-open"]',
      locateStrategy: 'xpath',
      elements: {
        content: {
          selector: './/div[@class="modal__content"]',
          locateStrategy: 'xpath',
        },
        close: {
          selector: './/div[contains(@class,"modal__close")]',
          locateStrategy: 'xpath',
        },
      },
      commands: {
        validateTheModal(this: ModalSection): ModalSection {
          return this.waitForElementVisible('@close');
        },
        validateTheContent(this: ModalSection, theVarExpected: string): NightwatchBrowser {
          return this.api.assert.equal(theVarExpected, '10', 'Epa!');
        },
      },
      sections: {
        footer: {
          selector: '//div[@class="footer"]',
          locateStrategy: 'xpath',
          elements: {
            title: {
              selector: '//div[@class="footer__tile"]',
              locateStrategy: 'xpath',
            },
          },
          commands: {
            validateFooter(this: ModalFooterSection): ModalFooterSection {
              return this.waitForElementVisible('@title');
            },
          },
        },
      },
    },
  },
  elements: {
    title: {
      selector: '//h1',
      locateStrategy: 'xpath',
    },
    showModal: {
      selector: "//button[@class='show-modal']",
      locateStrategy: 'xpath',
    },
    cardTitle: {
      selector: '//div[@class="card"]//h1',
      locateStrategy: 'xpath',
    },
  },
  commands: {
    validateModal(this: HomePage): HomePage {
      return this.perform(() => {
        const sectionModal = this.section.modal;

        sectionModal
          .waitForElementVisible('@content')
          .getAttribute('@content', 'data-id', (result) => {
            console.log('Data ID = ', result.value);
          })
          .getText('@content', (result) => {
            console.log('Text Content = ', result.value);
          });
        this.section.questions.waitForElementVisible('@listItems');
      });
    },
    showModal(this: HomePage): HomePage {
      return this.waitForElementVisible('@showModal').click('@showModal');
    },
    validateHero(this: HomePage): HomePage {
      const section = this.section.hero;
      return section.assert.valueContains('@slide', 'slide', 'Verified!');
    },
    validateTitle(this: HomePage): HomePage {
      return this.waitForElementVisible({ selector: '@title', index: 0 });
    },
    validateCardTitle(this: HomePage): HomePage {
      return this.waitForElementVisible('@cardTitle');
    },
    clickButtonOnIframe(this: HomePage): NightwatchBrowser {
      return this.api.elements('tag name', 'IFRAME', (items) => {
        if (Array.isArray(items.value)) {
          items.value.forEach((element) => {
            this.api
              .frame(element.ELEMENT, (result) => {
                console.log(result);
              })
              .waitForElementPresent('BUTTON', 1000)
              .getText('H2', (result) => {
                console.log(result);
              })
              .frameParent();
          });
        }
      });
    },
    getAllElements(this: HomePage): NightwatchBrowser {
      return this.api.elements(
        this.elements.title.locateStrategy,
        this.elements.title.selector,
        (items) => {
          if (Array.isArray(items.value)) {
            items.value.forEach((element) => {
              this.api.elementIdAttribute(element.ELEMENT, 'innerText', (res) => {
                console.log('InnerText: ', res);
              });
            });
          }
        }
      );
    },
    validateListItems(this: HomePage): HomePage {
      const section = this.section.questions;

      return section
        .waitForElementVisible('@listItems')
        .api.elements('@listItems', (elements: { result: { value: { ELEMENT: string }[] } }) => {
          console.log('Elements: ', elements.result.value);

          elements.result.value.forEach((element: { ELEMENT: string }) => {
            console.log('Element: ', element);
            this.api.elementIdText(element.ELEMENT, (result) => {
              console.log('Item text: ', result);
            });
          });
        });
    },

    validateElementsCount(this: HomePage): HomePage {
      return this.getText({ selector: '@title', index: 4 }, (result) => {
        console.log(result.value);
      });
    },
  },
};
