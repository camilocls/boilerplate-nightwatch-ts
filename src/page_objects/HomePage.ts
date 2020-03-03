import { HomePage } from "nightwatch";

module.exports = {
  sections: {
    hero: {
      selector: '//section[@class="hero"]',
      locateStrategy: "xpath",
      elements: {
        slide: {
          selector: './/div[@class="slide"]',
          locateStrategy: "xpath"
        }
      }
    },
    questions: {
      selector: '//section[@class="questions"]',
      locateStrategy: "xpath",
      elements: {
        listItems: {
          selector: './/ul[contains(@class,"list")]//li',
          locateStrategy: "xpath"
        }
      }
    },
    modal: {
      selector: '//div[@class="modal modal-open"]',
      locateStrategy: "xpath",
      elements: {
        content: {
          selector: './/div[@class="modal__content"]',
          locateStrategy: "xpath"
        },
        close: {
          selector: './/div[contains(@class,"modal__close")]',
          locateStrategy: "xpath"
        }
      }
    }
  },
  elements: {
    title: {
      selector: "//h1",
      locateStrategy: "xpath"
    },
    showModal: {
      selector: "//button[@class='show-modal']",
      locateStrategy: "xpath"
    },
    cardTitle: {
      selector: '//div[@class="card"]//h1',
      locateStrategy: "xpath"
    }
  },
  commands: {
    validateModal(this: HomePage) {
      const sectionModal = this.section.modal;

      sectionModal
        .waitForElementVisible("@content")
        .getAttribute("@content", "data-id", (result: any) => {
          console.log('Data ID = ', result.value);
        })
        .getText("@content", (result: any) => {
          console.log('Text Content = ', result.value);
        });
      return (() => {
        this.section.questions.waitForElementVisible("@listItems");
      })();
    },
    showModal(this: HomePage) {
      return this.waitForElementVisible("@showModal").click("@showModal");
    },
    validateHero(this: HomePage) {
      const section = this.section.hero;
      return section.assert.valueContains("@slide", "slide", "Verified!");
    },
    validateTitle(this: HomePage): HomePage {
      return this.waitForElementVisible({ selector: "@cardTitle", index: 1 });
    },
    validateCardTitle(this: HomePage): HomePage {
      return this.waitForElementVisible("@cardTitle");
    },
    clickButtonOnIframe(this: HomePage) {
      return this.api.elements("tag name", "IFRAME", items => {
        Object.keys(items.value).forEach(element => {
          const el = items.value[element];
          console.log(el);
          this.api
            .frame(items.value[element], result => {
              console.log(result);
            })
            .waitForElementPresent("BUTTON", 1000)
            .getText("H2", result => {
              console.log(result);
            })
            .frameParent();
        });
      });
    },
    getAllElements(this: HomePage) {
      return this.api.elements(
        this.elements.title.locateStrategy,
        this.elements.title.selector,
        items => {
          Object.keys(items.value).forEach(element => {
            this.api.elementIdAttribute(
              items.value[element].ELEMENT,
              "innerText",
              function(res) {
                console.log('InnerText: ', res);
              }
            );
          });
        }
      );
    },
    validateListItems(this: HomePage) {
      const section = this.section.questions;

      return section
        .waitForElementVisible("@listItems")
        .api.elements("@listItems", (elements: any) => {
          console.log('Elements: ', elements.result.value);

          elements.result.value.forEach((element: { ELEMENT: string }) => {
            console.log('Element: ', element);
            this.api.elementIdText(element.ELEMENT, result => {
              console.log("Item text: ", result);
            });
          });
        });
    },
    validateElementsCount(this: HomePage) {
      return this.getText({ selector: "@title", index: 4 }, result => {
        console.log(result);
      });
    }
  }
};
