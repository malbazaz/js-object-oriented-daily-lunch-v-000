// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

class Neighborhood{
    constructor(name){
      this.name = name;
      this.id = ++neighborhoodId;
    }
    deliveries(){
      return store.deliveries.filter(delivery =>{
        return delivery.neighborhoodId === this.id;
      })
    }
    customers(){
      return store.customers.filter(cust =>{
        return cust.neighborhoodId === this.id;
      })
    }
    meals(){
// returns unique list of meals that have been ordered
    }
}
class Customer{
    constructor(name,neighborhoodId){
      this.name = name;
      this.neighborhoodId = neighborhoodId;
      this.id = ++customerId;
    }
    deliveries(){
      return store.deliveries.filter(delivery=>{
        return delivery.customerId === this.id;
      })
    }
    meals(){
      return store.meals.filter(meal =>{
        return meal.customerId === this.id;
      })
    }
    totalSpend(){
      // returns the total amt that cust spent on food
    }
}

class Meal{
    constructor(title,price){
      this.title = title;
      this.price = price;
      this.id = ++mealId;
    }
    deliveries(){
      return store.deliveries.filter(delivery=>{
        return delivery.mealId === this.id;
      })
    }
    customers(){
      const notUniqueCust = store.customers.filter(cust=>{
        return cust.mealId === this.id;
      })
      const uniqueCust = [...new Set(notUniqueCust)];
      return uniqueCust;
    }
    byPrice(){
      // a class method that orders meal instance by price in
      // descending order - user static keyword.
    }
}

class Delivery{
    constructor(mealId,neighborhoodId,customerId){
      this.mealId = mealId;
      this.neighborhoodId = neighborhoodId;
      this.customerId = customerId;
      this.id = ++deliveryId;
    }
    meal(){
      return store.meals.find(function(meal){
        return meal.id === this.mealId;
      }.bind(this))
    }
    customer(){
      return store.customers.find(function(customer){
        return customer.id === this.customerId;
      }.bind(this))
    }
    neighborhood(){
      return store.neighborhoods.find(function(neighborhood){
        return neighborhood.id === this.neighborhoodId;
      }.bind(this))
    }
}
