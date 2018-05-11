package sample.grizzly;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(CustomerResource.class);

        //register Jackson object mapper provider
        register(MyObjectMapperProvider.class);
        register(JacksonFeature.class);
    }
}