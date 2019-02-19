let indices = [];

function addIndex() {
    // jQuery will give all the HNs in document order
    jQuery('h2,h3,h4,h5,h6').each(function() {
        let hIndex = parseInt(this.nodeName.substring(1)) - 2;

        // just found a levelUp event
        if (indices.length - 1 > hIndex) {
            indices= indices.slice(0, hIndex + 1 );
        }

        // just found a levelDown event
        if (indices[hIndex] === undefined) {
            indices[hIndex] = 0;
        }

        // count + 1 at current level
        indices[hIndex]++;

        // display the full position in the hierarchy
        jQuery(this).prepend("<span style='color: #ccc; margin-right: 10px'>" + indices.join(".") + "." + "</span>"  + "&emsp;");
    });
}

jQuery(document).ready(function() {
    addIndex();
});