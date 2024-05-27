"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Currency = /** @class */ (function () {
    // Add types to the constructor parameters.
    function Currency(name, code, symbol) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
        // Store the `code` and `symbol` parameter values in
        // their corresponding class fields.
    }
    // Methods are public by default.
    // Add a visibility modifier to make it clear this method is public.
    //
    // Add a return type for this method
    // Hint: Look at the inferred return type.
    Currency.prototype.describe = function () {
        // Replace the `null` values below with the appropriate field values.
        // Hint: Access field values with: this.fieldName
        var description = "The ".concat(this.name, " currency ");
        description += "has the code ".concat(this.code, " ");
        description += "and uses the symbol ".concat(this.symbol, ".");
        console.log(description);
    };
    return Currency;
}());
// ----
var currencyNaira = new Currency("Naira", "NGN", "₦");
console.log(currencyNaira);
// Call the `describe()` method on the `currencyNaira` object.
currencyNaira.describe();
// ----
var currencyUsDollar = new Currency("United States dollar", "USD", "$");
console.log(currencyUsDollar);
// Call the `describe()` method on the `currencyUsDollar` object.
currencyUsDollar.describe();
