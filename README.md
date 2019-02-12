# VTEX Footer

## Description
The VTEX Footer app shows information about the store such as address, social networks and payment methods. Furthermore, it is possible to add hyperlinks for privacy policy, FAQ, benefits and attendance. This is a VTEX app that is used by Dreamstore product.

:loudspeaker: **Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Release schedule
| Release  | Status              | Initial Release | Maintenance LTS Start | End-of-life | Dreamstore Compatibility
| :--:     | :---:               |  :---:          | :---:                 | :---:       | :---: 
| [1.x]    | **Maintenance LTS** |  2018-09-20     | 2018-11-21            | March 2019  | 1.x
| [2.x]    | **Current Release** |  2018-11-21     |                       |             | 2.x


See our [LTS policy](https://github.com/vtex-apps/awesome-io#lts-policy) for more information.

## Table of Contents
- [Usage](#usage)
  - [Blocks API](#blocks-api)
    - [Configuration](#configuration)
  - [Styles API](#styles-api)
- [Troubleshooting](#troubleshooting)
- [Tests](#tests)

## Usage

This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object)

To use this app you need to add it in your `dependencies` in the `manifest.json` file.

```json
  dependencies: {
    "vtex.store-footer: 2.x"
  }
```

Then, add `footer` block into our app theme, like we do in our [Dreamstore app](https://github.com/vtex-apps/dreamstore/blob/master/store/blocks.json).

### Blocks API
This app has an interface that describes what rules must be implemented by a block when you want to use the footer. 

```json
  "footer": {
    "component": "index"
  }
```
#### Configuration
Through the Storefront you can change the behavior and interface of the footer. But, you can also make adjusts in your theme app, like Dreamstore does.

Store Footer:

| Prop name | Type | Description |
| --- | --- | --- |
| `socialNetworks` | `Array(Social Network)` | Array of social networks |
| `sectionLinks` | `Array(Section Link)` | Array of section links |
| `storeInformations` | `Array(String)` | Array of informations about the store |
| `badges` | `Array(Badge)` | Array of badges |
| `paymentForms` | `Array(Payment Form)` | Array of payment forms |
| `showPaymentFormsInColor` | `Boolean` | Set color of payment forms |
| `showSocialNetworksInColor` | `Boolean` | Set color of social networks |
| `logo` | `String` | Link of Store logo |

Social Network:

| Prop name | Type | Description |
| --- | --- | --- |
| `links` | `Array(Link)` | Array of links |

Section Link:

| Prop name | Type | Description |
| --- | --- | --- |
| `title` | `String!` | Title of the section |
| `links` | `Array(Link)` | Array of links |

Link:

| Prop name | Type | Description |
| --- | --- | --- |
| `url` | `String` | URL |
| `title` | `String` | Title of the link |

Badge:

| Prop name | Type | Description |
| --- | --- | --- |
| `image` | `String` | URL of the badge |

Payment Form:

| Prop name | Type | Description |
| --- | --- | --- |
| `title` | `String!` | Title of payment form |
| `paymentTypes` | `Array(String)` | Array of strings containing the payment types |

### Styles API
This app has CSS customization through `CSS Modules`. CSS Modules is a CSS file in which all class names and animation names are scoped locally by default. You can read more about CSS Modules [here](https://github.com/css-modules/css-modules).

We use it `css-loader` to generate a CSS token on a HTML element. For example, the builder generate a CSS token based on app vendor, name and major version. Like `socialNetworkContainer` token declared in footer, generate the classname `vtex.footer-2-x-socialNetworkContainer`.

To override the default CSS, you need to add it in the `manifest.json` as described in the [Usage](#usage) section. Also, you need to import `styles` on your manifest:

```json
  "builders": {
    "styles": "1.x"
  }
```

Also, create a `vtex.storeFooter.css` file in `styles/css` for your handlers customization.

Below, we describe the tokens, their explanation and the component where it is located.

| Token name         | Component          | Description                                            |
| ------------------ | ----------         |------------------------------------------------------- |
| `footer`        | [index](https://github.com/vtex-apps/store-footer/blob/master/react/index.js)           | The main content of the footer                         |
| `container`        | [index](https://github.com/vtex-apps/store-footer/blob/master/react/index.js)           | The links and payment methods containers                         |
| `linksContainer`        | [index](https://github.com/vtex-apps/store-footer/blob/master/react/index.js)           | The inner links container                         |
| `socialNetworkContainer`        | [index](https://github.com/vtex-apps/store-footer/blob/master/react/index.js)           | The social networks container                         |
| `textContainer`        | [index](https://github.com/vtex-apps/store-footer/blob/master/react/index.js)           | The container for the text informations of the store                         |
| `listTitle`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           | The title of a item list. (e.g, 'Institutional')                         |
| `listContainer`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           | The wrapper containing the list title and its items                         |
| `listContainerRightAligned`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           | The properties to be applied when the listContainer is right aligned                         |
| `listContainerHorizontal`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           | The properties to be applied when the listContainer is horizontal                        |
| `list`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           |     The container for a list of items                    |
| `listItem`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           | The item of a list                       |
| `listHorizontal`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           | The properties to be applied to the list when the `horizontal` props is true                        |
| `listItemHorizontal`        | [footerList](https://github.com/vtex-apps/store-footer/blob/master/react/components/footerList.js)           |  The properties to be applied to the item list when the `horizontal` props is true                       |
| `accordion`        | [Accordion](https://github.com/vtex-apps/store-footer/blob/master/react/components/Accordion.js)           |  The accordion container for list in mobile view                       |
| `accordionTitle`        | [Accordion](https://github.com/vtex-apps/store-footer/blob/master/react/components/Accordion.js)           | The accordion title for list in mobile view                        |
| `accordionIcon`        | [Accordion](https://github.com/vtex-apps/store-footer/blob/master/react/components/Accordion.js)           |  The accordion icon in mobile view                      |
| `listLink`        | [FooterLinkList](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterLinkList.js)           |  The link inside a list                       |
| `matrixContainer`        | [FooterLinksMatrix](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterLinksMatrix.js)| The container that holds all the listContainers                        |
| `matrixItem`        | [FooterLinksMatrix](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterLinksMatrix.js)| The wrapper for an item of the matrix. (e.g, list)                        |
| `matrixItemSmall`        | [FooterLinksMatrix](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterLinksMatrix.js)|  The item of the matrix in mobile view                        |
| `accordionItem`        | [FooterLinksMatrix](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterLinksMatrix.js)| The item inside the accordion (e.g, link)                         |
| `paymentFormItem`        | [FooterPaymentFormList](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterPaymentFormList.js)|The image of the payment form|
|`paymentMatrixItem`        | [FooterPaymentFormMatrix](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterPaymentFormMatrix.js)|The container that holds a payment method and the accepted cards                      
| `paymentMatrix`        | [FooterPaymentFormMatrix](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterPaymentFormMatrix.js)|The wrapper that holds all the paymentMatrixItems                        
|`socialNetworkItem`| [FooterSocialNetworkList](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterSocialNetworkList.js)|The image of a social network                         
|  `vtexLogoItem`        | [FooterVtexLogo](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterVtexLogo.js)|The 'Powered by VTEX' logo|
|  `badgeList`        | [FooterVtexLogo](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterVtexLogo.js)| The wrapper for all the VTEX bagdes                         |
|    `badge`        | [FooterVtexLogo](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterVtexLogo.js)| One VTEX badge                         |
|    `logoImage`        | [FooterVtexLogo](https://github.com/vtex-apps/store-footer/blob/master/react/components/FooterVtexLogo.js)| The image of the VTEX logo                         |




## Troubleshooting
You can check if others are passing through similar issues [here](https://github.com/vtex-apps/store-footer/issues). Also feel free to [open issues](https://github.com/vtex-apps/store-footer/issues/new) or contribute with pull requests.

## Tests
:construction: :construction: :construction: