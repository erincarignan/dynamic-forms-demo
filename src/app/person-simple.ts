export class PersonSimple {
    id = 0;
    name;
    addresses: Address[];
}

export class Address {
    street;
    city;
    state;
    zip;
}
