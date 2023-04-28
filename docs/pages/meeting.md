# Meeting Minutes

??? abstract "Jan 18 / First Client Meeting"

    ## Main Purpose 🕰️

    - Discuss project requirements with the client, clarify high level questions, and understand client's vision

    ## Attendance 👨‍💻

    - Paula (Client), Yazeed (TA), the entire Biosphere team

    ## Q&A❓+❗

    What are the overarching goals of the project?

    - Promote human interaction in biodiversity enhancement, eventually aim to 'game-ify' ecosystem interactions through AR for promoting aquatic conservation

    How many aquatic objects do we need to consider for models?

    - This prototype will be used in a fixed space with predetermined models, the app does not need to recognize new species or abiotic objects

    Would we have access to data on geo-location of ecosystems? Do we have to map specific areas?

    - Area mapping data will be provided by the Aquatic Biosphere of Canada

    How should information about AR objects be displayed?

    - Each object should be clickable, upon clicking a popup information fragment should appear with wikipedia-like information. Use simple language for young audiences, provide additional links to external web pages at the bottom of the fragment. 

    Do you have any software preferences?

    - Not specifically, but would prefer a platfrom that would likely stay constant over time.

    Would this project be open source?

    - TBD

??? abstract "Jan 22 / Internal Team Meeting"

    ## Main Purpose 🕰️

    - Discuss distribution of tasks for sprint 1, planned internal deadlines for completion of tasks
    
    ## Attendance 👨‍💻

    - The entire Biosphere team
    
    ## Important Takeaways❗

    - Work for sprint 1 is documented in Google Drive

    - First internal deadline for assigned roles: Jan 25, to finish project requirements and software design documents

    - Second internal deadline for assigned roles: Jan 27, to finish project management and teamwork documents

    - Sent Paula options for 3D animal models for her to choose from

??? abstract "Jan 25 / Sprint 1 Check-in Meeting"

    ## Main Purpose 🕰️

    - Gather updates on all team members on their sprint 1 tasks

    ## Attendance 👨‍💻
    
    - The entire biosphere team

    ## Important Takeaways❗

    - Team reached agreement on high level architecture to eb used for this project

    - All user stories were outlined

    - Software design diagrams were in progress

??? abstract "Jan 27 / Sprint 1 Final Updates"

    ## Main Purpose 🕰️

    - Finalize all details of sprint 1 deliverables, provide feedback to other members' work

    ## Attendance 👨‍💻
    
    - The entire biosphere team

    ## Important Takeaways❗

    - Plan to have all sprint 1 deliverables added to team documentation page by the end of the day

    - Finalize and make last minute edits software design diagrams, and user stories

??? abstract "Feb 1 / Second Client Meeting"

    ## Main Purpose 🕰️

    - Update Paula on the sprint 1 items, show her low fidelity wireframes 
    - Comfirm that our high level designs align with her vision

    ## Attendance 👨‍💻
    
    - Paula (Client), The entire biosphere team

    ## Important Takeaways❗

    - Paula confirmed that our architectural design and wireframes align with her specifications

    - Paula confirmed this project can be open source

    - Discussed frameworks and technologies amongst team members

    - Team to finalize decision between using Firebase or NodeJS as backend persistence layer, research the semanics between ARCore vs AR Foundation

??? abstract "Feb 6 / Sprint 2 Meeting, Sprint 1 Review"

    ## Main Purpose 🕰️

    - Review of sprint 1 deliverables with Yazeed, consider feedback for sprint 2 updates
    - Comfirm tasks for sprint 2

    ## Attendance 👨‍💻
    
    - Yazeed (TA), The entire biosphere team

    ## Important Takeaways❗
    - Architecture diagram, open source resources, and user stories needs to be updated for sprint 2

    - Sprint planning needs to be reconsidered, user stories should be more evenly distributed amongst sprint to avoid having one sprint with a much higher velocity

    - Decided to use Firebase Firestore as backend with Firebase database, because of team member familiarity and easy to use. Might consider transfering to NodeJS at later sprints because it is more scalable. Kevin assures us it is a simple transition. 

    - Distributed tasks for sprint 2:
        - Kevin: rebalance velocity of sprint planning, update story maps
        - V: design UI of landing page
        - Mohammad: set up Firebase, work on home page of app
        - Yui: design UI of landind page, update architecture diagram, general update of docs 
        - Raun: design UI of landing page, update user stories to match new sprints
        - Huy: update list of similar projects and open source projects 

??? abstract "Feb 8 / Sprint 2 Update Meeting + Unity Workshop"

    ## Main Purpose 🕰️

    - Comfirm progress for sprint 2, further divide the tasks in a more specific manner
    - Discuss assigning issues on Git
    - Learn Unity with Yazeed


    ## Attendance 👨‍💻
    
    - The entire biosphere team, Yazeed (only for workshop)

    ## Important Takeaways❗

    - Documentation updates mostly completed, addressed feedbacks from sprint 1 

    - Push Unity code base to Git, work on landing page and accessing camera

    - Work on testing 

    - Aim to have everything done by Friday, Feb 10

??? abstract "Feb 13 / Sprint 2 demo and feedback"

    ## Main Purpose 🕰️

    - Review sprint 2 and discuss feedback
    - Discuss next steps for sprint 3 (internal)

    ## Attendance 👨‍💻
    
    - The entire biosphere team, Yazeed (for demo)

    ## Important Takeaways❗

    - Sprint 2 code base mostly looks good, minor updates on documentation required

    - Implement a controller in each Unity scene to respond to onClick methods, write one script per scene

    - Unit test is good, need more tests in the future

    - Distribute tentative sprint 3 roles, assign roles per sprint in Github
    - Kevin and V will start integrating google maps API, other members are not available this week due to midterms

??? abstract "Feb 20/ Client Update and Internal Meeting"

    ## Main Purpose 🕰️

    - Demo the homescreen and camera to client
    - Ask client for clarification on models and datasets
    - Discuss next steps for sprint 3 (internal)

    ## Attendance 👨‍💻
    
    - Paula + Lee (Clients), The entire biosphere team

    ## Important Takeaways❗

    - Clients like the current homepage
    - Client provided us a document of species they would like us to find models of, would like at least 3-5 models
    - Arthropod models should be upscaled for easy viewing, mammals and birds can be life-size
    - Client not sure how the geodata will be provided, for the prototype, assume the app will only be used at UofA
    - Use a 'treasure hunt' format where object pop up randomly on screen according to a set timer
    - Use google maps to pin user location, do not implement manual location select
    - Only have water and land as available surfaces, we will primarily test the app in the business quad
    - Tentative tasks:
        - Mohammad: UML updates
        - Kevin: User story updates, google map API
        - Yui: Sprint planning updates, surface selection
        - Everyone: spawning AR models
        - V: google maps API
        - Raun: UI for location select
    

??? abstract "Mar 2/ TA Help Meeting"

    ## Main Purpose 🕰️

    - Receive help in debugging Unity and building project

    ## Attendance 👨‍💻
    
    - The entire biosphere team, Yazeed

    ## Important Takeaways❗

    - Everyone received help in building and running the project
    - Debugging support to solve the problem of clicking models
    - Received help on how to make models not spawn on top of eachother

??? abstract "Mar 6 / Sprint 3 demo + internal meeting "

    ## Main Purpose 🕰️

    - Demo sprint 3, receive feedback
    - Discuss planning for sprint 4

    ## Attendance 👨‍💻
    
    - The entire biosphere team, Yazeed

    ## Important Takeaways❗

    - Assigned new product owner and scrum master
    - Broad distribution of tasks: 
        - Models spawn improvement: Kevin + V
        - Database: Mohammad + Huy
        - Display environment information pop up box: Yui + Raunak

??? abstract "Mar 11 / Internal Meeting "

    ## Main Purpose 🕰️

    - Further discuss sprint 4 task progress

    ## Attendance 👨‍💻
    
    - The entire biosphere team

    ## Important Takeaways❗

    - Assigned detailed tasks
    - We should improve model focusing by checking raycast color
    - Focus on testing
    - Look for more models

??? abstract "Mar 13 / Internal Meeting + Client Meeting "

    ## Main Purpose 🕰️

    - Further discuss sprint 4 task progress
    - Demo app to client

    ## Attendance 👨‍💻
    
    - The entire biosphere team, Paula (client portion)

    ## Important Takeaways❗

    - Consider removing the bird sounds from the home page
    - more UI testing
    - Client likes the app, would prefer to have one model that is a local species
    - The information for each model should include binomial nomenclature, 2-3 sentences description, and an info link
    - Client would prefer to have user findings be save-able for later viewing
    - Consider a whack-a-model game mode where user can whack invasive species

??? abstract "Mar 20 / Sprint 4 Demo + client meeting "
     ## Main Purpose 🕰️

    - Receive feedback for sprint 4, planning for sprint 5
    - Demo app to client, ask for final feedback


    ## Attendance 👨‍💻

    - The entire biosphere team, Yazeed (sprint 4 demo), Paula (client portion)

    ## Important Takeaways❗

    - Client prefers to have the ability to save model information
    - Deliver app to client as an APK, and she would like a video demonstration of the app
    - Client likes the app, would prefer to have one model that is a local species

??? abstract "Mar 26 / Internal meeting "
     ## Main Purpose 🕰️

    - Further discuss and distribute sprint 5 tasks


    ## Attendance 👨‍💻

    - The entire biosphere team

    ## Important Takeaways❗

    - Create an inventory for models, save them by clicking a like button
    - Look for more models that represent client's preference
    - Improve UI and scale elements accordingly

??? abstract "Apr 03 / Internal meeting "
     ## Main Purpose 🕰️

    - Finalizing sprint 5 deliverables

    ## Attendance 👨‍💻

    - The entire biosphere team, Yazeed

    ## Important Takeaways❗

    - Testing with sonarqube
    - Include APK in Github release
    - Put installing instructions in user manual
   