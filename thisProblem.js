let myObj = {
    day: 'Monday',
    meetings: 0,

    addMeeting : function(){
        console.log(this)
    }
}
myObj.addMeeting()//this is all the object properties
