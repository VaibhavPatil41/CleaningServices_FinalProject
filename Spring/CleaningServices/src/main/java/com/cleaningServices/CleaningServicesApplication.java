package com.cleaningServices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.cleaningServices.*")
public class CleaningServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CleaningServicesApplication.class, args);
	}

}
