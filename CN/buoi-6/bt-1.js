var a = [1,2,3];
//pure fuction đáp ứng hai điều kiện
        function total(arr)
        {
            // no side effect
            //immutable
            const arr2 =[...arr];
            arr2.push('abc');
            return arr2;
        }
        //console.log(total(a));
        //console.log(a);
        var paragraph = `There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour, 
         or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
          hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
           predefined chunks as necessary, making this the first true generator on the Internet. It uses 
           a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
           to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
            free from repetition, injected humour, or non-characteristic words etc.`;

    //     function longChar(par){
    //         var dem =0;
    //         var vt=0;
    //       for(var i=0;i<par.length;i++){
    //           if(i ==""){
    //               vt= i;
    //           }
    //           var dem2=0
    //         for(var j=vt;j<par.length;j++){
    //             if(j !=""){
    //                 dem2++;
    //             }
    //             else{
    //                 break;
    //             }
    //             if(dem2 >dem){
    //                 dem =dem2;
    //             }
    //             vt=j;
    //         }
           
    //         return dem;
    //     }
    
    // }
    // 2. Write a function to check if a word or phase is a palindromes
//Examples: 
//words: mom, wow, level, radar, madam, noon
//phases: 
// my gym
// don't nod!
// i did, did i?
// step on no pets
// no lemon, no melon

function checkPal(input) {
    //your code here
    var max = input.length -1;
    for(var i=0;i<input.length;i++)
    {
        
       if (input[max]!= input[i]) 
        return false;
        
        max --;
       
    }
return true;
  }
  
  console.log(checkPal('level'));
  //checkPal2('Mom');
  //checkPal3('Mom');