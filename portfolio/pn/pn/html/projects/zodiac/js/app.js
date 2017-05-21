//Initialzizing variables
//Star animations and zodiac banner borrowed from Tristian and codepen.io and modified here for my purposes:)
var canvas, c, w, h,
    twoPI = Math.PI * 2,
    mX, mY,
    sign = 0,
    scale = 1.5,
    speed = 30,
    zero = { x: 0, y: 0, r: 0, p: [], a: 0 },
    zodiac = [
        [   // capricorn
            { x: -119, y: -12, r: 3, p: [1], a: 1 },
            { x: -97, y: -8, r: 3, p: [2], a: 1 },
            { x: -59, y: -4, r: 3, p: [3], a: 1 },
            { x: -15, y: -8, r: 3, p: [4], a: 1 },
            { x: 81, y: -29, r: 4, p: [5], a: 1 },
            { x: 69, y: -3, r: 0, p: [], a: 1 },
            { x: 29, y: 65, r: 3, p: [7,14], a: 1 },
            { x: 13, y: 79, r: 3, p: [8], a: 1 },
            { x: -21, y: 66, r: 3, p: [9], a: 1 },
            { x: -13, y: 19, r: 3, p: [3,18], a: 1 },
            { x: -62, y: 43, r: 3, p: [11,3], a: 1 },
            { x: -69, y: 36, r: 3, p: [2], a: 1 },
            { x: 64, y: -3, r: 2, p: [], a: 1 },
            { x: 73, y: -1, r: 2, p: [], a: 1 },
            { x: 65, y: 5, r: 2, p: [], a: 1 },
            { x: 92, y: -55, r: 3, p: [4], a: 1 },
            { x: 85, y: -53, r: 2, p: [], a: 1 },
            { x: 98, y: -55, r: 2, p: [], a: 1 },
            { x: 60, y: 2, r: 0, p: [], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],       
        [   // aquarius
            { x: -112, y: 62, r: 3, p: [1], a: 1 },
            { x: -102, y: 60, r: 3, p: [2], a: 1 },
            { x: -98, y: 52, r: 3, p: [3], a: 1 },
            { x: -93, y: -12, r: 3, p: [4,5], a: 1 },
            { x: -91, y: -29, r: 3, p: [5], a: 1 },
            { x: -61, y: -22, r: 3, p: [6,17], a: 1 },
            { x: -5, y: -27, r: 3, p: [7], a: 1 },
            { x: 3, y: -66, r: 3, p: [8,11], a: 1 },
            { x: -17, y: -58, r: 3, p: [9], a: 1 },
            { x: -46, y: -65, r: 3, p: [10], a: 1 },
            { x: -24, y: -76, r: 3, p: [7], a: 1 },
            { x: 54, y: -39, r: 3, p: [12], a: 1 },
            { x: 89, y: -6, r: 3, p: [13], a: 1 },
            { x: 115, y: -18, r: 3, p: [14], a: 1 },
            { x: 124, y: -16, r: 3, p: [], a: 1 },
            { x: 9, y: 10, r: 3, p: [11], a: 1 },
            { x: -32, y: -67, r: 2, p: [], a: 1 },
            { x: -51, y: 13, r: 3, p: [18], a: 1 },
            { x: -60, y: 28, r: 3, p: [3], a: 1 },
            { x: -70, y: 72, r: 3, p: [20], a: 1 },
            { x: -77, y: 66, r: 3, p: [21], a: 1 },
            { x: -78, y: 56, r: 3, p: [3], a: 1 },
            { x: -101, y: -6, r: 2, p: [], a: 1 },
            { x: -98, y: -10, r: 2, p: [], a: 1 },
            zero,
            zero,
            zero
        ],
        [   // pisces
            { x: -53, y: -76, r: 3, p: [1,2], a: 1 },
            { x: -43, y: -86, r: 3, p: [2], a: 1 },
            { x: -43, y: -58, r: 3, p: [3], a: 1 },
            { x: -62, y: -27, r: 3, p: [4], a: 1 },
            { x: -70, y: -8, r: 3, p: [5], a: 1 },
            { x: -93, y: 24, r: 3, p: [6], a: 1 },
            { x: -111, y: 60, r: 3, p: [7], a: 1 },
            { x: -83, y: 45, r: 3, p: [8], a: 1 },
            { x: -67, y: 43, r: 3, p: [9], a: 1 },
            { x: -44, y: 36, r: 3, p: [10], a: 1 },
            { x: -32, y: 33, r: 3, p: [11], a: 1 },
            { x: -12, y: 37, r: 3, p: [12], a: 1 },
            { x: 49, y: 35, r: 3, p: [13], a: 1 },
            { x: 76, y: 42, r: 3, p: [14], a: 1 },
            { x: 95, y: 36, r: 3, p: [15], a: 1 },
            { x: 108, y: 40, r: 3, p: [16], a: 1 },
            { x: 111, y: 51, r: 3, p: [17], a: 1 },
            { x: 99, y: 64, r: 3, p: [18], a: 1 },
            { x: 78, y: 66, r: 3, p: [13], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // aries
            { x: -94, y: 49, r: 3, p: [1], a: 1 },
            { x: -60, y: 22, r: 3, p: [2], a: 1 },
            { x: -53, y: -43, r: 3, p: [3,4], a: 1 },
            { x: -53, y: -67, r: 3, p: [4], a: 1 },
            { x: -34, y: -47, r: 3, p: [5], a: 1 },
            { x: 59, y: -26, r: 4, p: [6], a: 1 },
            { x: 86, y: -35, r: 3, p: [7], a: 1 },
            { x: 97, y: -4, r: 3, p: [5], a: 1 },
            { x: 100, y: 15, r: 3, p: [9], a: 1 },
            { x: 54, y: 7, r: 3, p: [5,1], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // taurus
            { x: 6.5, y: 8.5, r: 3, p: [1, 10], a: 1 },
            { x: -6.5, y: 10.5, r: 3, p: [2], a: 1 },
            { x: -18.5, y: 8.5, r: 5, p: [3], a: 1 },
            { x: -113.5, y: -13.5, r: 3, p: [4], a: 1 },
            { x: -33.5, y: -26.5, r: 3, p: [5], a: 1 },
            { x: -11.5, y: -32.5, r: 3, p: [6], a: 1 },
            { x: -8.5, y: -27.5, r: 3, p: [7], a: 1 },
            { x: -9.5, y: -11.5, r: 3, p: [8], a: 1 },
            { x: -1.5, y: -7.5, r: 2, p: [9], a: 1 },
            { x: 3.5, y: -2.5, r: 3, p: [0], a: 1 },
            { x: 39.5, y: 19.5, r: 3, p: [11], a: 1 },
            { x: 85.5, y: 21.5, r: 3, p: [12], a: 1 },
            { x: 93.5, y: 24.5, r: 3, p: [13], a: 1 },
            { x: 87.5, y: 76.5, r: 3, p: [], a: 1 },
            { x: 47.5, y: 53.5, r: 3, p: [11], a: 1 },
            { x: 20.5, y: 45.5, r: 3, p: [0], a: 1 },
            { x: -11.5, y: 43.5, r: 3, p: [17], a: 1 },
            { x: -17.5, y: 27.5, r: 3, p: [0], a: 1 },
            { x: -97.5, y: -53.5, r: 4, p: [4], a: 1 },
            { x: 31.5, y: -47.5, r: 2, p: [5], a: 1 },
            { x: 36.5, y: -49.5, r: 2, p: [21], a: 1 },
            { x: 39.5, y: -52.5, r: 2, p: [22], a: 1 },
            { x: 43.5, y: -55.5, r: 2, p: [23], a: 1 },
            { x: 41.5, y: -48.5, r: 2, p: [24], a: 1 },
            { x: 45.5, y: -50.5, r: 2, p: [], a: 1 },
            { x: 77.5, y: 4.5, r: 3, p: [11], a: 1 },
            { x: -6.5, y: 5.5, r: 2, p: [] }
        ],
        [   // gemini
            { x: -50, y: 103, r: 3, p: [1], a: 1 },
            { x: -89, y: 27, r: 3, p: [2], a: 1 },
            { x: -58, y: -15, r: 3, p: [3], a: 1 },
            { x: -55, y: -70, r: 3, p: [4], a: 1 },
            { x: -28, y: -61, r: 3, p: [5], a: 1 },
            { x: 11, y: -57, r: 3, p: [6], a: 1 },
            { x: 24, y: 9, r: 3, p: [7], a: 1 },
            { x: 51, y: 66, r: 4, p: [8], a: 1 },
            { x: 69, y: 73, r: 3, p: [9], a: 1 },
            { x: 94, y: 76, r: 3, p: [], a: 1 },
            { x: 23, y: 77, r: 3, p: [6], a: 1 },
            { x: -13, y: 90, r: 4, p: [12], a: 1 },
            { x: -36, y: 23, r: 3, p: [2], a: 1 },
            { x: -81, y: -66, r: 3, p: [3], a: 1 },
            { x: -59, y: -91, r: 5, p: [3], a: 1 },
            { x: -44, y: -95, r: 3, p: [], a: 1 },
            { x: -12, y: -104, r: 5, p: [17], a: 1 },
            { x: -3, y: -91, r: 3, p: [5], a: 1 },
            { x: 65, y: -59, r: 3, p: [5], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // cancer
            { x: -91, y: -5, r: 3, p: [1], a: 1 },
            { x: -17, y: -18, r: 3, p: [2], a: 1 },
            { x: 21, y: -39, r: 3, p: [3], a: 1 },
            { x: 34, y: 52, r: 3, p: [4], a: 1 },
            { x: -52, y: 103, r: 3, p: [1], a: 1 },
            { x: 71, y: -96, r: 3, p: [2], a: 1 },
            { x: 4, y: -16, r: 3, p: [], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // leo
            { x: -112, y: 22, r: 4, p: [1], a: 1 },
            { x: -57, y: -13, r: 3, p: [2], a: 1 },
            { x: -36, y: -13, r: 3, p: [3], a: 1 },
            { x: 28, y: -21, r: 4, p: [4], a: 1 },
            { x: 31, y: -44, r: 3, p: [5], a: 1 },
            { x: 55, y: -63, r: 3, p: [6], a: 1 },
            { x: 94, y: -71, r: 3, p: [7], a: 1 },
            { x: 89, y: -51, r: 3, p: [8], a: 1 },
            { x: 68, y: -52, r: 3, p: [9,5], a: 1 },
            { x: 49, y: -6, r: 3, p: [10,3], a: 1 },
            { x: -53, y: 19, r: 3, p: [11,1], a: 1 },
            { x: -66, y: 50, r: 3, p: [12], a: 1 },
            { x: -57, y: 78, r: 3, p: [], a: 1 },
            { x: 20, y: 47, r: 3, p: [10], a: 1 },
            { x: 53, y: 29, r: 5, p: [9], a: 1 },
            { x: 93, y: 36, r: 3, p: [9], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // virgo
            { x: -115, y: 14, r: 3, p: [1], a: 1 },
            { x: -62, y: 4, r: 3, p: [2], a: 1 },
            { x: -16, y: 12, r: 3, p: [3], a: 1 },
            { x: 17, y: -24, r: 3, p: [4], a: 1 },
            { x: 46, y: 0, r: 4, p: [5], a: 1 },
            { x: 69, y: -59, r: 3, p: [6], a: 1 },
            { x: 99, y: -57, r: 3, p: [7], a: 1 },
            { x: 99, y: -31, r: 3, p: [8], a: 1 },
            { x: 73, y: -7, r: 3, p: [4], a: 1 },
            { x: 18, y: 26, r: 3, p: [10,4], a: 1 },
            { x: 1, y: 57, r: 5, p: [11,2], a: 1 },
            { x: -52, y: 64, r: 3, p: [12], a: 1 },
            { x: -61, y: 44, r: 3, p: [13,1], a: 1 },
            { x: -92, y: 54, r: 3, p: [], a: 1 },
            { x: -1, y: -58, r: 3, p: [3], a: 1 },
            { x: 77, y: -50, r: 2, p: [], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // libra
            { x: -17, y: 98, r: 4, p: [1], a: 1 },
            { x: -15, y: 81, r: 4, p: [2], a: 1 },
            { x: -61, y: -35, r: 4, p: [3,4], a: 1 },
            { x: -31, y: -98, r: 5, p: [4], a: 1 },
            { x: 49, y: -55, r: 5, p: [5], a: 1 },
            { x: 46, y: 41, r: 4, p: [], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // scorpio
            { x: -104, y: 17, r: 3, p: [1], a: 1 },
            { x: -82, y: 16, r: 4, p: [2], a: 1 },
            { x: -71, y: 19, r: 3, p: [3], a: 1 },
            { x: -84, y: 31, r: 3, p: [4], a: 1 },
            { x: -97, y: 36, r: 3, p: [5], a: 1 },
            { x: -105, y: 46, r: 3, p: [6], a: 1 },
            { x: -90, y: 62, r: 4, p: [7], a: 1 },
            { x: -54, y: 69, r: 3, p: [8], a: 1 },
            { x: -28, y: 65, r: 3, p: [9], a: 1 },
            { x: -19, y: 38, r: 3, p: [10], a: 1 },
            { x: -12, y: 12, r: 4, p: [11], a: 1 },
            { x: 22, y: -21, r: 3, p: [12], a: 1 },
            { x: 37, y: -34, r: 5, p: [13], a: 1 },
            { x: 57, y: -32, r: 3, p: [14], a: 1 },
            { x: 74, y: -73, r: 3, p: [15], a: 1 },
            { x: 87, y: -69, r: 3, p: [16], a: 1 },
            { x: 97, y: -45, r: 3, p: [17], a: 1 },
            { x: 92, y: -20, r: 3, p: [18], a: 1 },
            { x: 89, y: 3, r: 3, p: [19], a: 1 },
            { x: 62, y: -14, r: 3, p: [13], a: 1 },
            { x: 84, y: -60, r: 3, p: [15], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ],
        [   // sagittarius
            { x: -77, y: 94, r: 3, p: [1], a: 1 },
            { x: -96, y: 45, r: 3, p: [2, 14], a: 1 },
            { x: -14, y: -18, r: 3, p: [3], a: 1 },
            { x: 10, y: -32, r: 5, p: [4, 6], a: 1 },
            { x: -18, y: -69, r: 3, p: [5, 16], a: 1 },
            { x: 1, y: -70, r: 3, p: [3], a: 1 },
            { x: 26, y: -21, r: 3, p: [7, 13], a: 1 },
            { x: 63, y: -4, r: 3, p: [8, 10], a: 1 },
            { x: 54, y: -34, r: 3, p: [9], a: 1 },
            { x: 78, y: -68, r: 3, p: [10], a: 1 },
            { x: 90, y: 5, r: 3, p: [11], a: 1 },
            { x: 66, y: 50, r: 3, p: [12], a: 1 },
            { x: 53, y: 29, r: 4, p: [7], a: 1 },
            { x: 0, y: 2, r: 3, p: [14], a: 1 },
            { x: -35, y: 78, r: 3, p: [15], a: 1 },
            { x: -28, y: 106, r: 3, p: [], a: 1 },
            { x: -46, y: -89, r: 3, p: [17], a: 1 },
            { x: -42, y: -110, r: 3, p: [], a: 1 },
            { x: -4, y: -60, r: 3, p: [], a: 1 },
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero,
            zero
        ]   
    ],
    stars = JSON.parse(JSON.stringify(zodiac[sign])),
    signs = ['Capricorn', 'Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'];

//Canvas creation and onload stuff by Tristan at codepen.io. My functions are inserted and his links selected by 
//combo boxes date parsing functions rather than by user mouse and keyboard interactions      
window.onload = function(){
    canvas = document.createElement('canvas')

    var holder = document.getElementById('holder');
    var positionInfo = holder.getBoundingClientRect();
    var width = positionInfo.width;

    w = canvas.width = width-30;
    h = canvas.height = 450
    document.getElementById('signs').style.width = (width-30) + "px";
    document.getElementById('selection').style.width = (width-30) + "px"
    c = canvas.getContext('2d');
    var below = document.getElementById('selection').parentNode;
    below.appendChild(canvas);

    window.addEventListener('resize', function(e){
        var holder = document.getElementById('holder');
        var positionInfo = holder.getBoundingClientRect();
        var width = positionInfo.width;

        w = canvas.width = width-30;
        document.getElementById('signs').style.width = (width-30) + "px";
        document.getElementById('selection').style.width = (width-30) + "px"
        c.translate(w/2,h/2);
    }
);

    //Day option creation
    //Create an array to store values of 1-31 in
    //Push the value of i into the array in a string format 
    //Include leading zeros (if statement)
    //Add each string to the DOM as the loop goes
    var day = [];
    for(var i=1; i<=31; i++){
        if(i<10){
            day.push("0"+i);
        }else{
            day.push(i.toString());
        }

        //Create an option HTML element <option></option>
        var d = document.createElement("option");
        //Assign the value of the option HTML element as the string representing the day value 
        //<option value="i"></option>
        d.value = day[i-1];
        //Create the HTML text of the day value "01"...
        var noded = document.createTextNode(day[i-1]);
        //Create the final element that looks like <option value="i">"i"</option>
        d.appendChild(noded);
        //Select the thing we are going to stick the options in (day selector)
        elementd = document.getElementById("day");
        //Finally modify the day sector with the new option
        elementd.appendChild(d);
    }

    //Year option creation
    //Create an array to store year values in
    //Push the value of i into the array in a string format 
    //Include leading zeros (if statement)
    //Add each string to the DOM as the loop goes
    var year = [];
    var index = 0;
    for(var i=1900; i<=2017; i++){
        year.push(i.toString());    
        //Create an option HTML element <option></option>
        var y = document.createElement("option");
        //Assign the value of the option HTML element as the string representing the day value 
        //<option value="i"></option>
        y.value = year[index];
        //Create the HTML text of the day value "01"...
        var nodey = document.createTextNode(year[index]);
        //Create the final element that looks like <option value="i">"i"</option>
        y.appendChild(nodey);
        //Select the thing we are going to stick the options in (day selector)
        elementy = document.getElementById("year");
        //Finally modify the day sector with the new option
        elementy.appendChild(y);
        index = index +1;
    }

    //When enter button is clicked, start function calls with getDate()
    document.getElementById('Enter').onclick = function(){
        getDate();
    };

    //getDate takes the user's year month day selection from the screen and assigns them into a date object
    //called date.  It then passes that date object to the findSign fuction after verifying that it's valid
    function getDate() {
        var year = document.getElementById("year").value
        var month = document.getElementById("month").value
        var day = document.getElementById("day").value
        var date = new Date(year, month, day); 
        //Error handling for invalid dates like Apr. 31
        var leap = ((date.getFullYear()%4) == 0);
        if( //block days greater than 30 in April, June, Sept, Nov
            ((month == 1 || month == 3 || month == 5 || month == 8 || month == 10) && day > 30)
            ||
            //block days greater than 28 in feb on non leap years
            (month == 1 && day > 28 && !leap)
            ||
            //block days greater than 29 in feb of leap years
            (month ==1 && day > 29 && leap)){
            alert("Please enter a valid date");
        }else{
            findSign(date);
        }
    };

    //findSign figures out what the user's sign is based on the date object it was passed and then calls the
    //makeLink and change functions.  makeLink needs to know the sign and the index of the href it should use for that
    //sign. Change also needs to know the sign.  The global variable for sign must be updated for the draw animations
    function findSign(date){
        //Capricorn dates Dec22-Dec31 and Jan01-Jan19
        if(date.getMonth()==11 && date.getDate()>=22 || date.getMonth()==00 && date.getDate()<20){    
            change(0,0);
            makePrompt(signs[0]);
            sign = 0;
        }
        //Aquarius dates Jan20-Jan31 and Feb01-Feb18
        else if(date.getMonth()==00 && date.getDate()>=20 || date.getMonth()==01 && date.getDate()<19){
            change(1);
            makePrompt(signs[1]);
            sign = 1;
        }
        //Pices dates Feb19-Feb29 and Mar02-Mar20
        else if (date.getMonth()==01 && date.getDate()>=19 || date.getMonth()==02 && date.getDate()<21){
            change(2);
            makePrompt(signs[2]);
            sign = 2;
        }
        //Aries dates
        else if (date.getMonth()==02 && date.getDate()>=21 || date.getMonth()==03 && date.getDate()<20){
            change(3);
            makePrompt(signs[3]);
            sign = 3;
        }
        //Tarus dates
        else if (date.getMonth()==03 && date.getDate()>=20 || date.getMonth()==04 && date.getDate()<21){
            change(4);
            makePrompt(signs[4]);
            sign = 4;
        }
        //Gemini dates
        else if (date.getMonth()==04 && date.getDate()>=21 || date.getMonth()==05 && date.getDate()<21){
            change(5);
            makePrompt(signs[5]);
            sign = 5;
        }
        //Cancer dates
        else if (date.getMonth()==05 && date.getDate()>=21 || date.getMonth()==06 && date.getDate()<23){
            change(6);
            makePrompt(signs[6]);
            sign = 6;
        }
        //Leo dates
        else if (date.getMonth()==06 && date.getDate()>=23 || date.getMonth()==07 && date.getDate()<23){
            change(7);
            makePrompt(signs[7]);
            sign = 7;
        }
        //Virgo dates
        else if (date.getMonth()==07 && date.getDate()>=23 || date.getMonth()==08 && date.getDate()<23){
            change(8);
            makePrompt(signs[8]);
            sign = 8;
        }
        //Libra dates
        else if (date.getMonth()==08 && date.getDate()>=23 || date.getMonth()==09 && date.getDate()<23){
            change(9);
            makePrompt(signs[9]);
            sign = 9;
        }
        //Scorpio dates
        else if (date.getMonth()==09 && date.getDate()>=23 ||date.getMonth()==10 && date.getDate()<22){
            change(10);
            makePrompt(signs[10]);
            sign = 10;
        }
        //Sagittarius dates
        else if (date.getMonth()==10 && date.getDate()>=22 || date.getMonth()==11 && date.getDate()<22){
            change(11);
            makePrompt(signs[11]);
            sign = 11;
        }
    };   

    //change updates the banner so the 'current' class is applied to the correct sign,
    //and updates the link to the astrostyle website (removes link from old and adds link to new)
    //It also updates the global stars variable with the code for lines between stars for the current zodiac sign   
    function change(sign){
        var astrostyleLinks = [
        //Capricorn link
            "http://astrostyle.com/capricorn-horoscope/?_ga=2.227532830.2042845848.1493865470-1968424341.1493865069",
        //Aquarius link
            "http://astrostyle.com/aquarius-horoscope/?_ga=2.63383727.1026654909.1493870831-1968424341.1493865069",
        //Pices link
            "http://astrostyle.com/pisces-horoscope/?_ga=2.224898330.1888346831.1493870854-1968424341.1493865069",
        //Aries link
            "http://astrostyle.com/aries-horoscope/?_ga=2.195155695.2133227147.1493871364-1968424341.1493865069",
        //Tarus link
            "http://astrostyle.com/taurus-horoscope/?_ga=2.195155695.2133227147.1493871364-1968424341.1493865069",
        //Gemini link
            "http://astrostyle.com/gemini--horoscope/?_ga=2.91383322.1285016157.1493871397-1968424341.1493865069",
        //Cancer link
            "http://astrostyle.com/cancer-horoscope/?_ga=2.239370499.1428095349.1493871422-1968424341.1493865069",
        //Leo link
            "http://astrostyle.com/leo-horoscope/?_ga=2.191207530.1590654686.1493871435-1968424341.1493865069",
        //Virgo link
            "http://astrostyle.com/virgo-horoscope/?_ga=2.264569479.920382855.1493871453-1968424341.1493865069",
        //Libra link
            "http://astrostyle.com/libra-horoscope/?_ga=2.91896026.1777955588.1493871473-1968424341.1493865069",
        //Scorpio link
            "http://astrostyle.com/scorpio-horoscope/?_ga=2.27754879.2108274600.1493871497-1968424341.1493865069",
        //Sagittarius link
            "http://astrostyle.com/sagittarius-horoscope/?_ga=2.169668705.1138769747.1493871557-1968424341.1493865069"];

        document.getElementsByClassName('current')[0].href = ""
        document.getElementsByClassName('current')[0].className = "";
        for(var i = 0; i < stars.length; i++){
            stars[i].p = zodiac[sign][i].p;
        }
        document.getElementById(signs[sign]).className = 'current';
        document.getElementById(signs[sign]).href = astrostyleLinks[sign];
    }

    //makePrompt populates the DOM with a prompt for the user to visit the astrostyles website based on their sign
    function makePrompt(sign){
        var prompt = document.getElementById("prompt");
        //if statement adjusts the anchor text's grammar (an vs. a) for signs that start with vowels
        if(sign == "Aquarius" || sign == "Aries"){
            var promptText = "You're an " + sign + "! Click the link to go to Astrostyle.com and learn more";
        }else{
            var promptText = "You're a " + sign + "! Click the link to go to Astrostyle.com and learn more";  
        };
        prompt.innerHTML = promptText;
    }

    //draw, animate, update, clear functions from Tristan at codepen.io
    function draw(){
        c.save();
        for(var i = 0; i < stars.length; i++){
            c.fillStyle = "rgba(255,255,255," + stars[i].a + ")";
            c.beginPath();
                c.arc(stars[i].x * scale, stars[i].y * scale, stars[i].r * scale, 0, twoPI, false);
            c.closePath();
            c.fill();
            
            c.strokeStyle = "rgba(255,255,255,0.8)";
            for(var j = 0; j < stars[i].p.length; j++){
                c.beginPath();
                    c.moveTo(stars[i].x * scale, stars[i].y * scale);
                    c.lineTo(stars[stars[i].p[j]].x * scale, stars[stars[i].p[j]].y * scale);
                c.closePath();
                c.stroke();
            }
        }
        c.restore();
    }

    function update(){
        for(var i = 0; i < stars.length; i++){
            var dx = stars[i].x - zodiac[sign][i].x,
                dy = stars[i].y - zodiac[sign][i].y,
                dDist = Math.sqrt(dx * dx + dy * dy),
                dAngle = Math.atan2(dy, dx),
                dRadius = stars[i].r - zodiac[sign][i].r,
                dAlpha = stars[i].a - zodiac[sign][i].a;
        
            stars[i].x = stars[i].x - Math.cos(dAngle)/(speed/dDist);
            stars[i].y = stars[i].y - Math.sin(dAngle)/(speed/dDist);
            stars[i].r = stars[i].r - dRadius / speed;
            stars[i].a = stars[i].a - dAlpha / speed;
        }
    }
    
    function clear(){
        c.clearRect(-w,-h,w*2,h*2);
    }
    
    function animate(){
        update();
        clear();
        draw();
        requestAnimationFrame(animate);
    }

    c.translate(w/2,h/2);
    requestAnimationFrame(animate);
};

(function (w, r) {
    w['r'+r] = w['r'+r] || w['webkitR'+r] || w['mozR'+r] || w['msR'+r] || w['oR'+r] || function(c){ w.setTimeout(c, 1000 / 60); };
})(window, 'requestAnimationFrame');

