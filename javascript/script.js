// globalscope

var globalscopeVar = "Hi I am Global scope Var";

function test(){
    var functionScopeVar = "Inside Function Var"
    console.log(globalscopeVar+"Inside")
    console.log(functionScopeVar)
}
globalscopeVar = "Tulasi"
test()

console.log(globalscopeVar+"Outside")
// console.log(functionScopeVar)

// functionScope
if (true){
    let blockScopeVar =  
}






//BlockScope