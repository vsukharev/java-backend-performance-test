package sample.grizzly;

import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import java.io.IOException;
import java.net.URI;

/**
 * SampleGrizzlyApplication class.
 *
 */
public class SampleGrizzlyApplication {
    // Base URI the Grizzly HTTP server will listen on
    private static final String BASE_URI = "http://localhost:8080/test-backend/";

    /**
     * Starts Grizzly HTTP server exposing JAX-RS resources defined in this application.
     * @return Grizzly HTTP server.
     */
    private static HttpServer startServer() {
        // create a resource config that scans for JAX-RS resources and providers
        // in com.example package
        final ResourceConfig rc = new JerseyConfig();

        // create and start a new instance of grizzly http server
        // exposing the Jersey application at BASE_URI
        return GrizzlyHttpServerFactory.createHttpServer(URI.create(BASE_URI), rc);
    }

    /**
     * SampleGrizzlyApplication method.
     * @param args
     */
    public static void main(String[] args) {
        final HttpServer server = startServer();
        System.out.println(String.format("Jersey app started with WADL available at "
                + "%sapplication.wadl\nHit enter to stop it...", BASE_URI));
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }

        server.shutdownNow();
    }
}

