 ## Javascript Observer

    It is a design pattern which has the following characteristics,
    - Subject: It is considered as the keeper of information, of data or of business logic.
    - Register/attach/subscribe: Subscribe to the subject because they want to be notified when there is a change.
    - Notify:Depending on the implementation, the subject may “push” information to the observers, or, the observers may “pull” if they need information from the subject.
    - Event: Events act as a trigger in the subject such that all the observers are notified.
    - Update: Observers update their state independently from other observers however their state might change depending on the triggered event.
 
 -  Observer can be compared with Promise which is used for same purpose but has different behaviours.
 -  RxJs library is used for implementing this pattern in your FE application. But it's widely used in Angular applications.
 -  Observer has something caled Operators to manipulate the data in chain before passing to subscribers.
 -  Sample Operators are,
    - map
    - filters
 - Observer pattern can also be implemented in plain Javascript.
 