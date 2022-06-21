
window.addEventListener("load",app)
function app() {

console.log("app running js")
 let v1 ,v2,op1,op2 = '';
 
       let d = document.querySelector('#departure')
       let a = document.querySelector('#arrival');
       
       d.addEventListener('change',function(){
        op1 =  d.options[d.selectedIndex]
         
         v1= op1.value;
       })
        a.addEventListener('change',function(){
        op2 =  a.options[a.selectedIndex]
         v2 = op2.value; 
         
         
       })
       
    var lookup_btn = document.getElementById('lookup');
    lookup_btn.addEventListener("click",(ev)=>{
        
          arrMap(v1,v2,match)
     })
   
     
     function arrMap(departure ="Gwebu",arrival="Harare",callback) {
      console.log(v1,v2)
        
        let found_index = 0;
        
        
        
        let matrix = [
                        ['','Marondera','Gweru','Kadoma','Harare','Victoria Falls'],
                        ['Marondera',0,164,298,439,878],
                        ['Gweru',164,0 ,134,275,603],
                        ['Kadoma',298,134,0,141,737],
                        ['Harare',439,275,141,0,878],
                        ['Victoria Falls',878, 603, 737 ,878]                  
                    ]
                    
                    for(let i = 0 ; i < matrix[0].length;i++){
                        
                        if(departure.toLowerCase() == matrix[0][i].toLowerCase()){
                          found_index = matrix[0].indexOf(matrix[0][i])
                        }
                    }
                    for(let j = 1; j < matrix.length;j++){
                      callback(found_index, arrival,matrix[j])
                    }
                    
                    
     }
     
     function match(index,key,arr){
     let distance = 0 ;
        if(index > 0 && arr.includes(key)){
            distance = arr[index]
          
        }
        
       distance !== 0 ?  document.querySelector('p').innerHTML += distance : distance;
        
        return distance;
     }
}