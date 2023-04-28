# BridgeQueen
## Bridge Queen

### Background
[The Aquatic Biosphere of Canada's](https://www.aquaticbiosphere.ca/) mission is: To `educate`, `inspire` and `empower` people to play an active role in the conservation of our aquatic ecosystems. AR Biosphere specifically focuses on the life that exists within, on and at the edges of water.

Read more: [About us](https://www.aquaticbiosphere.ca/opportunity), [Aquatic Biosphere Network](https://www.thepublicplace.online/en/channel/the-aquatic-biosphere.8447)


### Project Description
The project's `goal` is to build a prototype (proof of concept) of an [Augmented Reality](https://en.wikipedia.org/wiki/Augmented_reality) Ecosystem app.

This project is a first stage prototype of a larger concept to integrate AR experiences for public engagement and learning. Ultimately AR will be incorporated into a variety of spaces, within the scope of this project and in partnership with other attractions and tourism regions who are expressing interest in creating a connected platform for visitor engagement within local natural biomes.


### About
This app is supported on Android and iOS mobile devices, its highlight featuers are 3D interactable models of land and aquatic species with informative content for general educational purposes. After launching, users will be shown their current location. Users begin their AR experiencing by accessing the camera through the app, they may select their current environmental surface as land or water, this will determine the types of species they will find. AR models of various species will spawn on camera at different rates, users can interact with the model by double clicking to display an information panel about that model. They can also navigate to online pages through an embedded link, note that internet is required for this step. The models discovered by the user can be saved to an inventory with their links, to ensure that users can re-visit them when they have internet access. 


### Usage
This app is family oriented, it is intended to be used by the general public that takes interest in learning about aquatic species and their ecosystems. For example, the app can be used when individuals explore their local natural systems. Our app aims to enhance interest and understanding of natural ecosystems and their species, as well as promote aquatic conservation through public engagement. In this first prototype, the availability of free, accessible 3D models are unfortunately limited. 


### Test Coverage
The app includes tests that covers interactable UI elements of every scene, navigation tests in between scenes, and tests for the Object Manager that handles AR models on screen. The tests are located in the app/Assets/Tests/PlaymodeTests.

SonarQube analysis was performed manually on major changes to ensure best practices in code. The results are found in sonarqube-results.


### Technologies
Most of  this app is build using Unity, we used Editor versions 2021.3.19f1. The database we use to store our 3D models is Firebase with SDK version 10.5.  We used the GoogleMaps API to access location settings. We used Nunit framework to perform unit testing and InputTestFixture for UI tests. Also integrated CI for checking the changed when anything is pushed on main and Sonarqube code analysis.


### Github repository
The Unity project exists in the app folder, all main components are stored in Assets with in app. The repository structure with in the app folder is replicated as how files are stored with in Unity. 
The docsblueprint folder contains all MkDocs images, pages, and .html files. 
The User Manual and Job Description are PDF files within the first page of the code.


### Screencast/Video Demo
A video recording showcasing the app can be found here: https://drive.google.com/file/d/1aQTV6oJmLBg2a1R2u_HinWm0_iIQRHRM/view?usp=drivesdk
