/*-----------------
~~~| What is HTTP? |~~~
-------------------- */

//The internet is composed of a number of entities hosted on different servers. These entities (resources) range from HTML files, stylesheets, images, & scripts.
//To access these entities, your browser asks servers for the entities it wants and then displays them for you inside the browser.
//There is a protocol for how browsers & servers speak to each other, a protocol of REQUESTS & RESPONSES called HTTP.

//HTTP [HyperText Transfer Protocol] structures how REQUESTS & RESPONSES are made over the internet. 
//HTTP is the 'command language' that devices on both sides of connection (btwn requestor & responder) must follow in order to communicate.
//TCP [Transmission Control Protocol] manages the channels btwn browser and server and the transfer of resources.



/*---------------------------
~~~| How does HTTP/TCP work? |~~~
------------------------------ */

//Typing a web address (or URL [Uniform Resource Locator]) causes a TCP channel to open to the server that responds to the URL you typed.
//In typing the URL, your computer is considered the CLIENT and it is making the REQUEST.
//Upon TCP connection being made, the client sends a HTTP GET REQUEST to the server to retrieve all resources that compose the webpage that it should display.
//The server, the one receiving the client REQUEST, will send a RESPONSE making up those resources and the server closes the TCP connection.

//More specifically, you type in the URL `http://www.europabarbarorum.com/EB1/`. . .
//1. The `http` portion instructs the protocol to be used.
//2. The domain name `europabarbarorum.com` is recognized by the internet's Domain Name Server and an IP [Internet Protocol] address is returned.
//3. The client uses the IP address and opens a TCP connection to the server at that address and initiate its REQUEST.
//4. Please note that every resource request requires a separate connection to the server using HTTP/1.0 whereas HTTP/1.1 can use one connection more than once causing less delay in communication.

//JavaScript uses an EVENT LOOP to handle async function calls. Function calls are made and added to a stack, async functions are sent to a separate queue. Once the stack has cleared, the functions in the queue are executed.



/*-----------------
~~~| What is AJAX? |~~~
-------------------- */

//Asynchronous JavaScript & XML [AJAX] enables requests to be made after the initial page load. AJAX can be used to handle XML, JSON, & more.

//The following is boilerplate AJAX for a GET request:

const xhr = new XMLHttpRequest();
const url = `http://api-to-call.com/endpoint`;
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState = XMLHttpRequest.DONE) {
        return xhr.response;
    }
}
xhr.open('GET', url);
xhr.send();


//The following is boilerplate AJAX for a POST request:

const xhr = new XMLHttpRequest();
const url = `http://api-to-call.com/endpoint`;
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState = XMLHttpRequest.DONE) {
        return xhr.response;
    }
}
xhr.open('POST', url);
xhr.send(data);