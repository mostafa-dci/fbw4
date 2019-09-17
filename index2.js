
for(let y =0; y<35;y++){
    //document.write("&nbsp;&nbsp;   *&nbsp;&nbsp;   ");
    for(let x=0;x<35;x++){
        // if( x===34 || x===0 || y===0 || y===34 ||
        //      y===x || y+x===34 || x===17 || y=== 17 
        //      ||(x<=17 && y<=17)
        //      ){
        //     document.write("<div>*</div>");
        // }else{
        //     document.write("<div></div>");
        // }
        if(Math.pow(x-17,2)+Math.pow(y-17,2)>25){
            document.write("<div>*</div>");
        }else{
            document.write("<div></div>");
        }
        
    }
    document.write("<br>");
}