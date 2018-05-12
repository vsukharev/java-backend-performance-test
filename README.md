# java-backend-performance-test
A performance test for the following backend RESTFull API + Java Microservices alternatives: Grizzly, Spring Boot + embedded tomcat and Payara Micro.
All the 3 implementations are based on Jersey.

This is the repository that contains the implementation for the performance test commented in my blog in the following post:

<a href="http://www.fabriciosuarte.com/2018/05/java-microservices-what-is-way-to-go.html">Java Microservices: what is the way to go</a>

About the directories structure:

In the 'simulation' directory, you can find the Gatling (htt://gatling.io) load test script and result directory, which contains the
results produced during my test.

Each server implementation has its own directory and project. It uses Gradle and you can open / import it on Intelij (I used the community edition).

<b>In order for running the servers and test:</b>

Make sure you have in your environment:

* A JVM 1.8 or higher installed and the JAVA_HOME properly set
* Gatling 2.3 or higher installed and properly set on your path
* Linux file descriptors and ephemeral TCP/IP port range properly set (take a look at the blog post mentioned above for more details)
* No other server running on port 8080

Recommended (not strictly necessary):

* Gradle 4.6 installed

<b>Building, running and testing:</b>

<b>Grizzly</b>

In a console, from the directory "jersey-grizzly":

<i>./gradlew build</i></br>
<i>java -jar build/libs/jersey-grizzly-backend.jar</i></br>

In another console window, from the repository root folder (running the test):

<i>gatling.sh -rf simulation/results -sf simulation/</i></br>

Confirm twice with "enter". The results of your test will be found in the "simulation/results" directory.

<b>Payara Micro</b>

In a console, from the directory "jersey-payara-micro":

<i>./gradlew build</i></br>
<i>java -jar extlibs/payara-micro-5.181.jar --deploy build/libs/jersey-payara-micro-backend.war</i></br>

In another console window, from the repository root folder (running the test):

<i>gatling.sh -rf simulation/results -sf simulation/</i></br>

Confirm twice with "enter". The results of your test will be found in the "simulation/results" directory.

<b>Spring Boot</b>

In a console, from the directory "jersey-spring-boot":

<i>./gradlew build</i></br>
<i>java -jar build/libs/jersey-spring-boot-backend.jar</i></br>

In another console window, from the repository root folder (running the test):

<i>gatling.sh -rf simulation/results -sf simulation/</i></br>

Confirm twice with "enter". The results of your test will be found in the "simulation/results" directory.
