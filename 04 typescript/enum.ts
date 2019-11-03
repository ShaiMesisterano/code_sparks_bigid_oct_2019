enum ClothsSize {
    xs = "1",
    xl = "2",
    m = "3"
}

class Person {
    shirtSize: ClothsSize = ClothsSize.xs;

    printShirtSize(): void {
        console.log(this.shirtSize);
    }
}

const dvir = new Person();
dvir.shirtSize = ClothsSize.xl;
dvir.printShirtSize();