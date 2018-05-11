package sample.grizzly;

import sample.grizzly.domain.Customer;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Path("/customer")
public class CustomerResource {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createCustomer(Customer customer, @Context UriInfo uriInfo) {

        long customerId = Calendar.getInstance().getTimeInMillis();

        UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
        uriBuilder.path(String.valueOf(customerId));

        return Response.status(201)
                .entity(uriBuilder.build())
                .build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listCustomers() {

        //Simulates returning 10 customers
        List<Customer> list = new ArrayList<>(10);

        Customer customer;
        int id;
        String name;
        String address;
        Date birthDate;

        Calendar calendar;

        for(int i = 0; i < 10; i++) {

            id = i+1;
            name = String.format("Customer %d", id);
            address = String.format("Address %d", id);

            calendar = Calendar.getInstance();
            calendar.add(Calendar.YEAR, (20 + id) * -1 );

            birthDate = calendar.getTime();

            customer = Customer.create(id, name, address, birthDate );
            list.add(customer);
        }

        return Response.ok(list).build();
    }

}