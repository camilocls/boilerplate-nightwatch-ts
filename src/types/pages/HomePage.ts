import { EnhancedPageObject, EnhancedPageObjectSections, EnhancedSectionInstance, NightwatchAPI } from 'nightwatch'

declare module 'nightwatch' {
  interface NightwatchCustomPageObjects {
    google(): HomePageTypes.HomePage;
  }
  
  namespace HomePageTypes {
    interface ModalFooterSection extends EnhancedSectionInstance {
      section: {
        footer: ModalFooterSection
      }
      validateTheModal: () => ModalSection
      validateTheContent: (theVarExpected: string) => ModalSection
    }
    
    interface ModalFooterSection extends EnhancedSectionInstance {
      validateFooter: () => ModalFooterSection
    }
    
    interface ModalSection extends EnhancedSectionInstance {
      section: {
        footer: ModalFooterSection
      }
      validateTheModal: () => ModalSection
      validateTheContent: (theVarExpected: string) => ModalSection
    }
    
    interface HomePage extends EnhancedPageObject {
      validateTitle: () => HomePage
      getAllElements: () => HomePage
      clickButtonOnIframe: () => NightwatchAPI
      validateCardTitle: () => HomePage
      validateListItems: () => HomePage
      validateModal: () => HomePage
      validateElementsCount: () => HomePage
      showModal: () => HomePage
      section: {
        modal: ModalSection 
        questions: EnhancedPageObjectSections
        hero: EnhancedPageObjectSections
      }
    }
  }
}
