//SkyNet Initialization
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

function check(index, SI, nodesA, nodesB, gateway) {      
    var NSI = nodesA.indexOf(SI, index);
        
    if(NSI != -1) {
        if(nodesB[NSI] == gateway) {
            print(nodesA[NSI] + " " + nodesB[NSI]);
            nodesA.splice(NSI, 1);
            nodesB.splice(NSI, 1);
        }
        else 
            return (check((NSI+1), SI, nodesA, nodesB, gateway));
    }
}

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

var nodes1 = new Array(L);
var nodes2 = new Array(L);

for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    nodes1[i] = parseInt(inputs[0]);
    nodes2[i] = parseInt(inputs[1]); // N1 and N2 defines a link between these nodes 
}

var gateways = new Array(E);

for (var i = 0; i < E; i++) 
    gateways[i] = parseInt(readline()); // the index of a gateway node

// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
 
    for(var k = 0; k < E; k++) {
        check(0, SI, nodes1, nodes2, gateways[k]);
        check(0, SI, nodes2, nodes1, gateways[k]);      
    }
      
    for(var j = 0; j < E; j++) {
        if(nodes1.indexOf(gateways[j])!= -1) {
            var x = nodes1.indexOf(gateways[j]);
            print(nodes1[x] + " " + nodes2[x]);  
            nodes1.splice(x, 1);
            nodes2.splice(x, 1);
        }
        else if(nodes2.indexOf(gateways[j]) != -1) {
            var x = nodes2.indexOf(gateways[j]);
            print(nodes1[x] + " " + nodes2[x]); 
            nodes1.splice(x, 1);
            nodes2.splice(x, 1);
        }
    }
}