package sample.javaeepayara;


import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("")
public class ApplicationConfig extends ResourceConfig {
    public ApplicationConfig() {
        register(CustomerResource.class);

        //register Jackson object mapper provider
        register(MyObjectMapperProvider.class);
        register(JacksonFeature.class);
    }
}

