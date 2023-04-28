# Project Requirements

## Executive summary
The Aquatic Biosphere Project of Canada engages individuals of all ages and backgrounds with Canada’s aquatic biosphere through presentations and media, community programs, and an upcoming public attraction. To that end, they hope to develop an Android/iOS application that uses augmented reality (AR) to enhance the device’s camera with fun and informative content about Canada’s nature. At the moment, the application is not funded. Our product will show potential investors that such an application is possible, hopefully securing funding for the Aquatic Biosphere Project to further develop the application.

When a user first opens the product, they will confirm their location in order to ensure the accuracy of the displayed information. The product will then open the device camera, and the user will be free to use it to scan their environment. When the user brings a relevant object into the camera view, the product will augment the object with the appropriate AR objects. Note that the product will only be tailored to environments within the University of Alberta North Campus.

## Product Documentation
- **To view the User Manual:** [click here](https://github.com/UAlberta-CMPUT401/ar-biosphere/blob/main/User%20Manual.pdf)
- **To view the project job description:** [click here](https://github.com/UAlberta-CMPUT401/ar-biosphere/blob/main/Job%20Description.pdf).


## Project Glossary
- **augment** - add additional virtual objects into the camera view so that the objects look as if they are there in 3d space
- **camera view** - the live camera feed of a device that is made visible on the device’s screen
- **device** - a handheld computing device with an integrated camera and a screen, running the android/ios operating system
- **application** - software running on a device; in the context of the summary, it refers mostly to the proposed but undeveloped future application
- **product** - the proof-of-concept application currently being developed
- **AR object** - augmented-reality object; fun or educational information, which may come in the form of 3d models, lines of text, images, among other mediums
- **environment** - a set location with visible objects that remain fairly consistent; this will be used to consistently test different camera views
- **surface** - flat plane in the real world on which the AR objects are augmented on. It can be determined either by recognition or by the user; e.g. pond, marsh, park


## User Stories

| Index       | User Story                                                                                                                               | Story Point | Acceptance test                                                                                                                                                                                       | MoSCoW                    |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| US 01.01    | As a User, I want to see a home screen that welcomes me to the app and has a link to the company's website, so I can gain more insights. | 3           | <li> User can see the homescreen and can interact with its links. </li>                                                                                                                               | Must                      |
| US 01.02    | As a User, I want the system to identify my location, so that I can share it with the app.                                               | 3           | <li> User's location is identified. </li>                                                                                                                                                             | Must                      |
| US 01.04    | As a user, I want to be able to be able to alternate between land and aquatic surfaces, so that the app can make assumptions on my surroundings and optimize the AR experience.               | 3           | <li> User's toggled surface is correctly marked as the AR objects's spawn location. </li>                                                                                                            | Must                      |
| US 01.05    | As a User, I want the app to access my camera, so that it can display Augmented objects.                                                 | 2           | <li> User's Camera is opened.</li>                                                                                                                                                                    | Must                      |
| US 01.06    | As an admin, I want to be able to add more 3D models, to increase user engagement.                                                       | 2           | <li> New models and their info are added to the DB. </li>                                                                                                                                             | Must                      |
| US 02.01    | As a user, I want to be able to view augmented objects on my screen, so that I can interact with them.                                   | 5           | <li> User can see appropriately placed AR objects.                                                                                                                                                    | Must                      |
| US 02.02    | As a user, I want to be able to view a brief description about the ecosystem I’m looking at, so that I know what to expect.              | 3           | <li> User can see information about the ecosystem in a new activity. </li>                                                                                                                            | Must                    |
| US 02.03.01 | As a user, I want to be able to click on an augmented object, so that I can learn information about it.                                  | 3           | <li> User is viewing an augmented object through their camera. </li>                                                                                                                                  | Must                      |
| US 02.03.02 | As a user, I want to be able to navigate to external links for each object, so that I can gather more information.                       | 3           | <li>From the popup information screen, user can click on a link to go to an external site where they learn more about the object. </li>                                                               | Should                    |
| US 03.01    | As a user, I want to create an account, so I can save my progress and interaction information on the app                                 | 5           | <li>User can select "Forgot Password" on the login screen.</li> <li> User can enter their email and receive a reset link. </li> <li> User can log in with their new password.</li>                    | Could                     |
| US 03.02    | As a user, I want to login to my account, to get a personalized experience.                                                              | 5           | <li>User opens the app and can see a login screen.</li> <li> User can enter their credentials and log in to their account.</li> <li> User can choose "Forgot Password" to recover their account.</li> | Could                     |
| US 03.03    | As a user, I want to be able to save object information in my records, so that I can read about it later.                                | 5           | <li>User can select an object.</li> <li> User can choose to save selected object.</li> <li> User can see a list of saved objects.</li>                                                                | Could                     |
| US 01.03    | As a user, I want to be able to enter my location manually or change it, if it is incorrect.                                             | 5           | <li> User's location information is changed to the new manually selected one. </li>                                                                                                                   | Would like, but won't get                      |
| US 04.01    | As a user, I want to be able to identify a species (eg. A real life plant) through the app, so that I can recognize new species.         | 8           | <li> User can point camera at a species.</li> <li> User can see information on possible matches for that species. </li>                                                                               | Would like, but won't get |
| US 04.02    | As a user, I want to be able to share my findings with others, so that I can help others find those objects/species.                     | 8           | <li> User can press share and select other users.</li> <li> Other users can receive and see the object and its information. </li>                                                                     | Would like but won't get  |
| US 04.03    | As a user, I want to be able to detect water bodies and land with the camera, so that my augmented environment can automatically change when I move around                     | 5           | <li> User can point their camera to and away from water, and different augmented objects would appear.</li> <li> User's environmental surface would be automatically updated.</li>                                                                     | Would like but won't get  |


## Similar Products
* [ARCore Elements](https://play.google.com/store/apps/details?id=com.google.ar.unity.ddelements): 
    * Demo app by Google using ARCore platform. 
    * The AR Elements are selectable and have sounds. Users can click on elements to view helpful tips for implementing
User Movement, User Interface and Object Movement. 
    * Selected elements come forward into the scene and the rest are pushed back. 
We can implement a similar feature to allow users to select objects and view information about them to avoid clustering the scene.
* [Augment](https://play.google.com/store/apps/details?id=com.ar.augment) and [AR Viewer](https://play.google.com/store/apps/details?id=com.ipol.arviewer.app):
    * AR apps where user view premade models or import and view their own models (AR Viewer).
    * Can be used to preview models before using in our own app.
    * Augment has Capture button to take a picture of the scene with the AR objects like a normal camera. AR Viewer also allows video recording up to 4K.
    * We can implement a similar feature to allow users to take photos and possibly record videos.

## Open Source Products
* https://github.com/Unity-Technologies/arfoundation-samples/: AR app demo built with [Unity's AR Foundation](https://unity.com/)
    * Has clear structure and instructions for setup with Unity and AR Foundation.
    * Has detailed samples of different AR features like planes, lighting, and object placement, etc. as well as ARCore and ARKit specific features.
    * We can follow implementations of the features we want to implement in our app.
* https://github.com/viromedia/figment-ar: AR app built with [ViroReact](https://github.com/viromedia)
    * Built and released on both iOS and Android.
    * Has multiple AR element types including animated models and environment. User can add multiple elements to the scene.
    * User can select an element and choose to remove them from the scene. We can implement a similar feature to allow users to select objects and view information about them 
or remove them from the scene.

## Technical Resources
* AR Engine: [Unity](https://unity.com/)
    * [Unity as a library in other applications](https://docs.unity3d.com/2019.3/Documentation/Manual/UnityasaLibrary.html)
    * Platform: [AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@5.0/manual/index.html)
    Created by Unity, has support for ARCore by Google and ARKit by Apple.
    * [Unity Mars](https://unity.com/products/unity-mars): Integrates with AR Foundation to build apps 
    * [Google's guide on getting started with AR Foundation](ttps://developers.google.com/ar/develop/unity-arf/getting-started-ar-foundation)
    * [Create an AR game using Unity's AR Foundation](https://codelabs.developers.google.com/arcore-unity-ar-foundation#0)
* Backend: [Firebase](https://firebase.google.com/)
    * [Firebase Authentication](https://firebase.google.com/docs/auth)
    * [Firebase Realtime Database](https://firebase.google.com/docs/database)
    * [Firebase Storage](https://firebase.google.com/docs/storage)
* Frontend: [Unity](https://unity.com/)
  * [Creating UI in Unity](https://docs.unity3d.com/2020.2/Documentation/Manual/UIToolkits.html)
  * [Comparison between Unity UI framworks](https://docs.unity3d.com/2020.2/Documentation/Manual/UI-system-compare.html)
* Deployment: [Expo](https://expo.io/)
* * [ViroReact](https://github.com/viromedia): Integrate directly with React Native. No longer in development.







