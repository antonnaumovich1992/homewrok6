

class DynamicCriterion{
    constructor(name, check, message){
        this.name = name;
        this.check = check;
        this.message = message;
    }


}


class Validator {
    constructor(arr){
        this.criteria = arr;
    }



    toggleValidation(name, state){
        let criterion = this.criteria.find(value => value.name == name);
        if (typeof state === 'undefined'){
            criterion.enabled = !this.criteria.enabled;
        } else {
            criterion.enabled = state;
        }
    }



validate(value){
    const result= {valid:true,errors:[]};
    result.errors=this.criteria.filter(z=>z.enabled).filter(x=>!x.check(value)).map(z=>[z.name,z.Message]);
    result.valid=result.errors.length==0;
    return result;
}

}


const criterion1= new DynamicCriterion('x',v=>v=='x','Не x');
const criterion2= new DynamicCriterion('y',v=>v=='y','Не y');
const criterion3= new DynamicCriterion('z',v=>v=='z','Не z');

const validator = new Validator([criterion1,criterion2,criterion3]);

console.log(validator.validate());