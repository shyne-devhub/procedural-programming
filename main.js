function dot_product (v1, v2){
    let ps = 0;
    for (i = 0; i < v1.length; i++){
l1 = v1[i];
for(x = 0; x < v2.length; x++){
    l2 = v2[i];
}
}
ps += l1 * l2;

if(ps === 0){
    console.log('the dot product is '+ ps +' and it is Orthogonal');
}else{
    console.log('the dot product is equals to '+ ps);
}
}



dot_product([3, 5], [7, 9]);
dot_product([5, 0], [0, 9]);