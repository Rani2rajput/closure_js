const outer=(a)=>{
    let b=5;
    const inner=()=>{
        let sum=a+b
        console.log(`the sum of these number is ${sum}`)
}
}
inner(2)
outer()