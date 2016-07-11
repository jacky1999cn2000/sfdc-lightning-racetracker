#SFDC Lightning RaceTracker

### Setup
* [Enable Lightning Experience](https://developer.salesforce.com/trailhead/en/lex_migration_introduction/lex_migration_introduction_administration)

* Enable Debug Mode
  * Click the gear-shaped icon on top-right corner, select "Setup Home"
  * Input "Lightning" in left panel's search box, and select "Custom Code/Lightning Components"
  * Check "Enable Debug Mode", and click save

* Enable My Domain
  * Input "My" in left panel's search box, and choose "My Domain"
  * Input domain name, check availability, and register
  * check email for validation, log back in and go to "My Domain" again, and click "Deploy to Users"

* [Aura Docs](https://jzlightningracetracker-dev-ed.lightning.force.com/auradocs/reference.app)

* Create custom object "Race"
  * Picklist type "Type"
  * DateTime type "DateTime"
  * Text type "Location"
  * Text type "Results"
  * Checkbox type "Attended"

* Create the following lightning components
  * RaceTrackerApp(Lightning App)
  * PageHeader(Lightning Component)
  * NewRace(Lightning Component)
  * ListRaces(Lightning Component)
  * Race(Lightning Component)
  * AddToRaceList(Lightning Event)

* Surfacing components to Salesforce1
  * Add `implements="force:appHostable"` to components
  ```javascript
  <aura:component implements="force:appHostable">
  ```
  * In "Tab" page, create 'New Lightning Component Tab' for each component
  * Input "Salesforce1" in left panel's search box, and choose "Salesforce1 Navigation"
  * Add newly created tabs into selected
  * View the tab in browser or via Chrome's "toggle device toolbar"

* Exposing component to Lightning App Builder
  * Add `implements="force:flexipage:availableForAllPageTypes"`
  * Input "Lightning" in left panel's search box, and choose "Lightning App Builder"
  * Choose "App Page", one column, and named it "Race Tracker"
  * Drag custom components "ListRaces" and "NewRace" into the panel, set page settings, and save.

* Useful Chrome Extensions
  * [Lightning inspector](https://chrome.google.com/webstore/detail/salesforce-lightning-insp/pcpmcffcomlcjgpcheokdfcjipanjdpc?hl=en)
  * [View Salesoforce1 in broswer](https://chrome.google.com/webstore/detail/s1-demo/kalbgfbifcaigjnkgagbeimcflnaijmc)
