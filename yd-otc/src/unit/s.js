class Person {
	constructor(a,b){
		this.a = a;
		this.b = b;
	}
	toString(){
        return (this.a+"--"+this.b)
	}
}
Object.assign(Person.prototype, {
  toStrinr(){},
  toValue(){}
});
export default Person;
