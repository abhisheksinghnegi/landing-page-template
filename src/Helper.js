const checkNumeric = (n)=>{
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export default checkNumeric