package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue = {"stepDefinition"},
        plugin = {"json:reports/cucumber-reports/cucumber.json",
                "html:reports/cucumber-reports/cucumber.html",
                "rerun:target/rerun.txt"},
        tags = {""},
        monochrome = true,
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        strict = true
)

public class TestRunner {
}
