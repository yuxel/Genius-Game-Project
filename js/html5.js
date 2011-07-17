( function(document) {
    var elements = ["header","nav","figure","footer","aside","article","section"];

    for(i=0; i<elements.length; i++) {
        document.createElement(elements[i]);
    }
})(document);