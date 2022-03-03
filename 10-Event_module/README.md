# ============= Event ============

# COMMON JS 
  const EventEmitter = require('events') ;

* Modern JS - ES6 
  import EventEmitter from "events" ;

# ======== 1 =======
on - When a listener is registered using the on() method, that
     listener is invoked every time the named event is emitted,
     on() method is used to register listeners.

     syntax : on(eventName, callback);


# ======== 2 =======
once - When a listener is registered using the once() method, it 
       is possible to register a listener that is called at most
       once for a particular event. Once the event is emitted, 
       the listener is unregistered and then called.

       syntax : once(eventName, callback);


#======== 3 ========
emit() - The emit() method allows an arbitrary set of arguments 
         to be passed to the listener function, emit() method is
         used to trigger the event.

         syntax:- emit(eventName, args);


