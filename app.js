//SkyNet Initialization
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var flag=0;
function check(index, SI, nodesA, nodesB, gateway) {
  var NSI=nodesA.indexOf(SI,index);
  if(NSI!=-1)
  {
        if(nodesB[NSI] == gateway)
        {
            print(nodesA[NSI]+" "+nodesB[NSI]);
            nodesA.splice(NSI,1);
            nodesB.splice(NSI,1);
            flag=1;
        }
        else 
        { // block to execute
            return (check((NSI+1),SI,nodesA,nodesB,gateway));
        }
  }
  else
  {
    flag=0;    
  }
  
}

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways
var nodes1=[];
var nodes2=[];
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    nodes1[i]=parseInt(inputs[0]);
    nodes2[i]=parseInt(inputs[1]); // N1 and N2 defines a link between these nodes 
}

var gateways=new Array(E);
for (var i = 0; i < E; i++) {
    gateways[i] = parseInt(readline()); // the index of a gateway node
}
//console.log(2);
// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
 
         for(var j = 0; j < E; j++)
        {
            check(0,SI,nodes1,nodes2,gateways[j]);
            check(0,SI,nodes2,nodes1,gateways[j]);
            if(flag===0)
            {
                if(nodes1.indexOf(gateways[j])!= -1)
                {
                    var x=nodes1.indexOf(gateways[j]);
                    print(nodes1[x]+" "+nodes2[x]);  
                    nodes1.splice(x,1);
                    nodes2.splice(x,1);
                }
                else if(nodes2.indexOf(gateways[j])!= -1)
                {
                    var x=nodes2.indexOf(gateways[j]);
                    print(nodes1[x]+" "+nodes2[x]); 
                    nodes1.splice(x,1);
                    nodes2.splice(x,1);
                }
            }
        }   
 
}