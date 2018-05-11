package sample.grizzly.domain;

import java.util.Date;

public class Customer {

    private long id;

    private String name;

    private String address;

    private Date birthDate;

    public Customer() {}

    public long getId() { return this.id;}
    public String getName() { return this.name;}
    public String getAddress() { return this.address; }
    public Date getBirthDate() { return this.birthDate; }

    public static Customer create(long id, String name, String address, Date birthDate) {
        Customer c = new Customer();

        c.id = id;
        c.name = name;
        c.address = address;
        c.birthDate = birthDate;

        return c;
    }
}
