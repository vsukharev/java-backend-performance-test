package sample.jersey;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("/test-backend")
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(CustomerResource.class);

        //register Jackson object mapper provider
        register(MyObjectMapperProvider.class);
        register(JacksonFeature.class);
    }

}