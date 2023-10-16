const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


let set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);
set.delete(5);
console.log(set)
set.clear();

let names = ["Moustapha", "Awa", "Demba", "Sofi", "Cheikh"]
let namesSet = new Set();
names.forEach(name => {
    set.add(name)
})
console.log(set)


let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);